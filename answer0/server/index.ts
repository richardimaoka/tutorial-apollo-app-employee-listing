import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

interface ServerContext {
  divisions: Division[];
}

const resolvers: { Query: QueryResolvers<ServerContext> } = {
  Query: {
    divisions: async (parent, args, context, info) => {
      return context.divisions;
    },
  },
};

const readJsonFile = async (relativeFileName: string): Promise<any> => {
  const jsonDataFile = __dirname.concat(relativeFileName);
  const fileContent = await fs.promises.readFile(jsonDataFile, "utf8");
  const jsonData = JSON.parse(fileContent);
  return jsonData;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any) => {
    try {
      const divisions = await readJsonFile("/data-divisions.json");
      const divisionTrading = await readJsonFile("/data-division-trading.json");
      const divisionSales = await readJsonFile("/data-division-sales.json");
      const departmentCurrencyTrading = await readJsonFile(
        "/data-department-currency-trading.json"
      );
      return {
        divisionTrading,
        divisions,
        divisionSales,
        departmentCurrencyTrading,
      };
    } catch (err) {
      console.log("***ERROR OCURRED***");
      console.log(err);
      throw new Error("internal error happened!!");
    }
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
