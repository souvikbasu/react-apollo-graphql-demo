import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Player from './Player'

const GET_PLAYER = gql`
  query {
    hello
  }
`

const App = () => {
  return (
    <Query query={GET_PLAYER}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          <Player url={data.hello} />
        )
      }}
    </Query>);
}
 export default App;