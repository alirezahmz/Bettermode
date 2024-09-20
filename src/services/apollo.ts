import { ApolloClient, InMemoryCache } from "@apollo/client";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const AUTHORIZATION_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const client = new ApolloClient({
  uri: BASE_URL,
  headers: {
    Authorization: `Bearer ${AUTHORIZATION_TOKEN}`
  },
  cache: new InMemoryCache()
});

export default client;
