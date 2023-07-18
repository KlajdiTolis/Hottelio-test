import { useEffect, useState } from "react";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { Admin, Resource } from "react-admin";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

import DataProvider from "./dataProvider";
import Screens from "./pages/screens/Screens";

export const App = () => {
  const [dataProvider, setDataProvider] = useState(null);

  // Fetching the data provider on component mount
  useEffect(() => {
    const fetchDataProvider = async () => {
      if (!dataProvider) {
        try {
          await buildGraphQLProvider({
            clientOptions: {
              uri: "https://reacadmin.hottelio.workers.dev/api/client/v2.0/app/dev-graphql-qhavf/graphql",
            },
          }).then((graphQlDataProvider: any) =>
            setDataProvider(() => graphQlDataProvider)
          );
        } catch (error) {
          console.error("Failed to fetch data provider:", error);
        }
      }
    };

    fetchDataProvider();
  }, []);

  // console.log(dataProvider, "dataProviderddddd");
  // console.log(DataProvider, "1233333111111112333333333");

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="screens" list={Screens} />
    </Admin>
  );
};
