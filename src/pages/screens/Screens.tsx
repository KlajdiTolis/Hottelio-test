import React, { useState, useEffect } from "react";
import { Datagrid, List, TextField, EditButton } from "react-admin";
import { Box } from "@mui/material";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

const ResourceList = () => {
  const GET_SCREENS = gql`
    query Screens {
      screen {
        _id
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_SCREENS);

  console.log(data, "dataaaaa");

  return (
    <Box sx={{ pl: 4, pr: 3, pt: 7 }}>
      <List title="Screens" >
        <Datagrid>
          <TextField label="Id" source="_id" />
        </Datagrid>
      </List>
    </Box>
  );
};
export default ResourceList;
