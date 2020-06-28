import { responseTransformer } from "./API/responseTransformer"
import { RestLink } from "apollo-link-rest"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"

const restLink = new RestLink({
  uri: "https://cdn.jwplayer.com/v2/",
  responseTransformer,
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})
