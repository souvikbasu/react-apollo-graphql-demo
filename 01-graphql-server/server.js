var express = require('express');
var graphqlHTTP = require('express-graphql');
var buildSchema = require('graphql').buildSchema;

var schema = buildSchema(`
  type Century {
    runs: String
    against: String
    date: String
  }
  
  type Query {
    firstName: String
    lastName: String
    profession: String
    nationality: String
    noOfCenturies: String
    centuries: [Century]
  }
`);

var root = {
  firstName: () => 'Sachin',
  lastName: () => 'Tendulkar',
  profession: () => 'Cricket',
  nationality: () => 'India',
  noOfCenturies: () => '100',
  centuries: () => [
        { "runs" : 119, "against" : "England", "date" : "9 August 1990" },
        { "runs" : 148, "against" : "Australia", "date" : "2 January 1992" },
        { "runs" : 114, "against" : "Australia", "date" : "1 February 1992" }
    ],
};

var app = express();

var cors=require('cors');
app.use(cors({origin:true,credentials: true}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
