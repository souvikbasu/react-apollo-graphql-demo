import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Player from './Player'

const GET_PLAYER = gql`
  query {
    firstName
    lastName
    profession
    nationality
    centuries {
      runs
      against
      date
    }
  }
`

const App = () => {
  return (
    <Query query={GET_PLAYER}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          <Player firstName={data.firstName} 
                  lastName={data.lastName} 
                  profession={data.profession} 
                  nationality={data.nationality} 
                  centuries={data.centuries} />
        )
      }}
    </Query>);
}
 export default App;