import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

interface Profile {
  imgSrc: string;
  name: string;
  residence: string;
  jobTitle: string;
  description: string;
}

async function init() {
  console.log(1);
  await sleep(1000);
  console.log(2);
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const resolvers = {
  Query: {
    me: async (
      parent: any,
      args: any,
      context: any,
      info: any
    ): Promise<Profile> => {
      await sleep(1000);
      return context.data.me;
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
