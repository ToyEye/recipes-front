"use client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const httpLink = createHttpLink({
    uri: "https://recipes-server-graph.onrender.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("token");
    console.log(token);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
