import React from "react";
import Admin from "./Admin";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "../assets/styles/app.css";

const cache = new InMemoryCache();
const link = new HttpLink({ uri:"http://localhost:4000/graphql" })
const client = new ApolloClient({
  link,
  cache
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
