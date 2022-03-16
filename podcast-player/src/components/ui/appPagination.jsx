import React from "react";
import Pagination from "@mui/material/Pagination";
import { Container } from "@mui/material";

const AppPagination = ({ setPage, pageCount }) => {
  const handleChange = (page) => {
    setPage(page);
  };
  return (
    <Container>
      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        count={pageCount}
        variant="outlined"
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default AppPagination;