import React from "react";
import Layout from "../layout/Layout";
import { useState } from "react";
import search from "../state/SearchState";
import { observer } from "mobx-react-lite";
import useSWR from "swr";
import MovieCard from "../components/MovieCard";
import { Grid } from "@mui/material";

const SearchResultPage = () => {
  const fetcher = (...args) => fetch(...args).then((r) => r.json());
  const { data, error } = useSWR(
    `http://127.0.0.1:8003/api/v1/movies/?search=${search.value}`,
    fetcher
  );

  return (
    <Layout>
      <Grid sx={{marginTop:"50px"}} container spacing={2}>
        {data && data.length > 0 ? (
          data.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
              <MovieCard key={item.id} item={item} />
            </Grid>
          ))
        ) : (
          <h1>No results</h1>
        )}
      </Grid>
    </Layout>
  );
};

export default observer(SearchResultPage);
