import React from "react";
import { Component } from "react";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { Admin, Resource } from "react-admin";

import Screens from "./pages/screens/Screens";

const App = () => {
  const [dataProvider, setDataProvider] = React.useState(null);
  React.useEffect(() => {
    const headers = {
      apiKey:
        "KjyfNQ7ZV9CSsd1u84ZdmvLifQATfxBNqXrFdku5E1K4gKSgu8tzG5DlCpjFTHqV",
    };
  
    buildGraphQLProvider({
      clientOptions: {
        uri: "https://europe-west1.gcp.realm.mongodb.com/api/client/v2.0/app/dev-graphql-qhavf/graphql",
        headers: headers,
      },
    }).then((graphQlDataProvider) =>
      setDataProvider(() => graphQlDataProvider)
    );
  }, []);

  console.log(dataProvider,"dataProvider");
  

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
