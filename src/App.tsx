import React from "react";
import { Component } from "react";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { Admin, Resource } from "react-admin";

import Screens from "./pages/screens/Screens";

const App = () => {
  const [dataProvider, setDataProvider] = React.useState(null);

  React.useEffect(() => {
    const fetchDataProvider = async () => {
      try {
        const graphQlDataProvider = await buildGraphQLProvider({
          clientOptions: {
            uri: "https://reacadmin.hottelio.workers.dev/api/client/v2.0/app/dev-graphql-qhavf/graphql",
          },
        }).then((graphQlDataProvider) =>
          setDataProvider(() => graphQlDataProvider)
        );
      } catch (error) {
        console.error("Failed to fetch data provider:", error);
      }
    };

    fetchDataProvider();
  }, []);

  console.log(dataProvider, "dataProviderddddd");

  if (!dataProvider) {
    return <div>Loading </div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="screens"
        list={Screens}
        // edit={PostEdit}
        // create={PostCreate}
      />
    </Admin>
  );
};

export default App;
