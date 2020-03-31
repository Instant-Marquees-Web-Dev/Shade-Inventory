import React from "react";
import Admin from "./Admin";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "../assets/styles/app.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='bg-gray-100'>
        <Admin />
      </div>
    </ApolloProvider>
  );
}

export default App;
