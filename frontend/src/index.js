import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory' 
import { HttpLink } from 'apollo-link-http'
import * as serviceWorker from './serviceWorker';
import App from './App.jsx';
import './index.css';
import 'antd/dist/antd.css';
const cache = new InMemoryCache() 
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
})

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
      <div id="wrap">
          <div id="content-short">
            <App />
          </div>
      </div>
      </ApolloProvider>
    </BrowserRouter>, document.getElementById('root'));
  serviceWorker.unregister();
  