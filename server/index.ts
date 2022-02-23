import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
import { Department, Division, QueryResolvers } from "./generated/graphql";

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

interface ServerContext {
  tradingDivision: Division;
  salesDivision: Division;
  currencyTradingDepartment: Department;
  divisions: Division[];
  departments: Department[];
}

const resolvers: { Query: QueryResolvers<ServerContext> } = {
  Query: {
    divisions: async (parent, args, context, info) => {
      return context.divisions;
    },
    division: async (parent, args, context, info) => {
      console.log("divisionName = ", args.divisionName);
      switch (args.divisionName) {
        case "trading":
          const limit = 10;
          const start = args.offset;
          const end = start + limit;
          const members = context.tradingDivision.members || [];
          return {
            ...context.tradingDivision,
            members: members.slice(start, end),
          };
        case "sales":
          return context.salesDivision;
        default:
          throw new Error(
            `divisionName = "${args.divisionName}" was passed, but currently only divisionName = "trading" or "sales" are handled.`
          );
      }
    },
    departments: async (paremtn, args, context, info) => {
      return context.departments;
    },
    department: async (paremtn, args, context, info) => {
      console.log(
        "divisionName =",
        args.divisionName,
        ", departmentName =",
        args.departmentName
      );
      if (
        args.divisionName === "trading" &&
        args.departmentName === "currency-trading"
      ) {
        return context.currencyTradingDepartment;
      } else {
        throw new Error(
          `divisionName = "${args.divisionName}" & department = ${args.departmentName} was passed, ` +
            `but currently only divisionName = "trading" & departmentName = "currency-trading" is handled.`
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
      const divisions = await readJsonFile("/data-divisions.json");
      const tradingDivision = await readJsonFile("/data-trading-division.json");
      const salesDivision = await readJsonFile("/data-sales-division.json");
      const departments = await readJsonFile("/data-departments.json");
      const currencyTradingDepartment = await readJsonFile(
        "/data-currency-trading-department.json"
      );
      return {
        tradingDivision,
        divisions,
        departments,
        salesDivision,
        currencyTradingDepartment,
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
