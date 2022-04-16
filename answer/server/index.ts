import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
