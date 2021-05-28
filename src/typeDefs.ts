const typeDefs = `
  scalar LocalDateTime
  scalar LocalDate
  scalar Long
  scalar UUID
  scalar Map_String_StringScalar
  scalar Map_String_ObjectScalar
  scalar Map_UUID_URLScalar

  input SortProjectInput {
    direction: String
    property: String
  }

  input SearchProjectionInput {
    filter: Map_String_ObjectScalar
    page: Int
    pageSize: Int
    sorts: [SortProjectInput]
  }

  type SearchItemDTO {
    id: UUID
    country: String
    name: String
    created: LocalDate
  }

  type PageDTO_SearchItemDTO {
    entities: [SearchItemDTO]
    page: Int!
    pageSize: Int!
    totalEntityCount: Long
    totalPageCount: Int!
  }

  type CreateResponseProjection {
    id: UUID
  }

  type Query {
    searchData (
      search: SearchProjectionInput
    ): PageDTO_SearchItemDTO
  }

  type Mutation {
    create (
      name: String
    ): CreateResponseProjection
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;
