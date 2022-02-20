import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

interface Division {
  divisionNameescription: string;
}

const resolvers = {
  Query: {
    divisions: async (
      parent: any,
      args: any,
      context: any,
      info: any
    ): Promise<Division[]> => {
      return context.data.divisions;
    },
    division: async (
      parent: any,
      args: { divisionName: string },
      context: any,
      info: any
    ): Promise<Division> => {
      console.log("divisionName = ", args.divisionName);
      const divisionData = context.data.divisions.find(
        (x: any) => x.divisionName === args.divisionName
      );
      console.log(context);
      return divisionData;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any) => {
    try {
      const jsonDataFile = __dirname.concat("/data.json");
      const fileContent = await fs.promises.readFile(jsonDataFile, "utf8");
      const jsonData = JSON.parse(fileContent);
      return { data: jsonData };
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
