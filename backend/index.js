var cors = require('cors')
const app = require('express')()
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers') 
const bookingAPI = require('./graphql/datasources/cars')

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    bookingAPI: new bookingAPI() 
  })
})



server.applyMiddleware({ app })

const PORT = 4000

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})