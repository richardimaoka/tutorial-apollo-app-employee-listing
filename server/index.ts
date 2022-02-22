import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

interface Division {
  divisionNameescription: string;
}

interface ServerContext {
  tradingDivision: Division;
  divisions: any;
}

const resolvers = {
  Query: {
    divisions: async (
      parent: any,
      args: any,
      context: ServerContext,
      info: any
    ): Promise<Division[]> => {
      return context.divisions;
    },
    division: async (
      parent: any,
      args: { divisionName: string },
      context: ServerContext,
      info: any
    ): Promise<Division> => {
      console.log("divisionName = ", args.divisionName);
      if (args.divisionName === "trading") {
        return context.tradingDivision;
      } else {
        throw new Error(
          `divisionName = "${args.divisionName}" was passed, but currently on divisionName = "trading" is handled.`
        );
      }
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
      const tradingDivision = await readJsonFile("/data-trading-division.json");
      const divisions = await readJsonFile("/data-divisions.json");
      return { tradingDivision, divisions };
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
