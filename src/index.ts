import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { schemaWithMocks } from "./mocks/graphql";
import cors from "cors";
import { healthCheckRouter } from "./healthCheck";

const schema = makeExecutableSchema({ typeDefs, resolvers });
const port = 4000;
const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaWithMocks(schema),
    graphiql: true
  })
);

app.use("/v1", healthCheckRouter);

app.listen(port, () => {
  console.log(`App is ready on port: ${port}`);
});
