import React from 'react';
import App from './components/App.js';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

const ApolloApp = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  
render(<ApolloApp />, document.getElementById('root'));
