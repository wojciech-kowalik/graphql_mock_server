import casual from "casual";
import { addMocksToSchema, MockList } from "@graphql-tools/mock";
import { GraphQLSchema } from "graphql";

const schemaWithMocks = (schema: GraphQLSchema) =>
  addMocksToSchema({
    schema,
    mocks: {
      LocalDate: () => casual.date(),
      UUID: () => casual.uuid,
      Long: () => casual.double(),
      Map_String_ObjectScalar: () => ({}),

      SearchItemDTO() {
        return {
          id: casual.uuid,
          country: casual.country,
          name: casual.name
        };
      },

      PageDTO_SearchItemDTO() {
        const pageSize = 10;
        const totalEntityCount = casual.integer(5, 12);
        const list = new MockList(totalEntityCount);
        const totalPageCount = Math.ceil(totalEntityCount / pageSize);
        return {
          entities: () => list,
          page: 1,
          pageSize,
          totalEntityCount,
          totalPageCount
        };
      }
    }
  });

export { schemaWithMocks };
