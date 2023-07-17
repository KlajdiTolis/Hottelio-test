import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  cloneElement,
  Fragment,
  ReactElement,
} from "react";
import {
  BooleanField,
  Datagrid,
  List,
  DateField,
  FunctionField,
  TextField,
  EditButton,
  useListContext,
  CreateButton,
  TopToolbar,
  FilterButton,
  ExportButton,
  sanitizeListRestProps,
  Pagination,
  TextInput,
  useGetOne,
  Button,
  DateInput,
  downloadCSV,
  ReferenceField,
} from "react-admin";
import {
  Typography,
  Chip,
  Box,
  Stack,
  Divider,
  ButtonBase,
} from "@mui/material";

const ResourceList = () => {
  return (
    <Box sx={{ pl: 4, pr: 3, pt: 7 }}>
      <List title="Our Screens">
        <Datagrid>
          <TextField label="Id" source="_id" />
          <EditButton />
        </Datagrid>
      </List>
    </Box>
  );
};
export default ResourceList;
