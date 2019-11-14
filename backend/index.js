const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers') 
const bookingAPI = require('./graphql/datasources/cars')
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    bookingAPI: new bookingAPI() 
  })
})



server.applyMiddleware({ app })
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use('/', router);

module.exports = app;