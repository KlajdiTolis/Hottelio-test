import React, { FC, useState, useEffect, useCallback } from "react";
import {
  Title,
  useGetList,
  useNotify,
  useCreate,
  useRefresh,
  useGetOne,
  useDataProvider,
} from "react-admin";
import {
  Box,
} from "@mui/material";


const Create = () => {
  const [data, setData] = useState([]);

  const Create = async () => {
    fetch(
      `https://hottelio.hottelio.workers.dev/app/data-hmbsg/endpoint/data/v1/action/findOne`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection: "screens",
          database: "hottelio_saas_db",
          dataSource: "hottelio-saas-cluster",
          filter: {
            name: "testdddd",
          },
        //   limit: 10,
        }),
      }
    )
      .then((res) => res.json())
      .then((dataa) => setData(dataa));
  };

  console.log(data);

  //   useEffect(() => {
  //     Create();
  //   }, []);
  return (
    <Box sx={{ pl: 6, pt: 5, borderRadius: 10 }}>
      <form>
        <button onClick={Create}>Create</button>
      </form>
    </Box>
  );
};

export default Create;
