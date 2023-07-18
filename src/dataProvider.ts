// in src/dataProvider.js
import buildGraphQLProvider, { buildQuery } from "ra-data-graphql-simple";
import { gql } from "graphql-tag";

const myBuildQuery =
  (introspection: any) => (fetchType: any, resource: any, params: any) => {
    const builtQuery = buildQuery(introspection)(fetchType, resource, params);

    if (resource === "screens" && fetchType === "GET_LIST") {
      return {
        // Use the default query variables and parseResponse
        ...builtQuery,
        // Override the query
        query: gql`
        query Screens {
            screen {
              _id
            }
          }
        `,
      };
    }

    return builtQuery;
  };

export default buildGraphQLProvider({ buildQuery: myBuildQuery });
