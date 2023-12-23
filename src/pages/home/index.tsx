import { Box, InputBase, Paper } from "@mui/material";
import Layout from "../../layout";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignContent: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          {}
          <InputBase
            placeholder="Search for the movies or the tv-series"
            sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
            value={search}
            onChange={handleSearch}
          />
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;
