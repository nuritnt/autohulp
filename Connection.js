import { HttpLink } from "apollo-link-http"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "solid-imp-61.hasura.app",
  }),
})