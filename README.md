# GQL mock server

## Available scripts

### `yarn` - install
### `yarn dev` - run development

## Run GraphiQL

### `http://localhost:4000/graphql`

## Example query

```graphql
query($search: SearchProjectionInput) {
  searchData(search: $search) {
    entities {
      id
      name
      country
      created
    }
    page
    pageSize
    totalPageCount
    totalEntityCount
  }
}
```

## Query variables

```json
{
  "search": {
    "filter": null,
    "page": 1,
    "pageSize": 100,
    "sorts": null
  }
}
```

## Example mutation

```graphql
mutation($name: String) {
  create(name: $name) {
    id
  }
}
```

## Query variables

```json
{
  "name": "Test"
}
```