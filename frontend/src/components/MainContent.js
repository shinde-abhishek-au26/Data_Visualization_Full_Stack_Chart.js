import React, { useState, useEffect } from 'react';
import FiltersComponent from './FiltersComponent';
import ChartComponent from './ChartComponent';
import { Container, Grid, Paper } from '@mui/material';
import axios from 'axios';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const baseUrl = 'http://localhost:5000/api/data';

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error('Error', error));
  }, []);

  const applyFilters = (filterData) => {
    const filtered = data.filter((item) => {
      return Object.entries(filterData).every(([key, value]) => {
        if (value === '') return true;
        if (key === 'End_Year') {
          return String(item.end_year).toLowerCase() === value.toLowerCase();
        } else if (key === 'Country') {
          return String(item.country).toLowerCase() === value.toLowerCase();
        } else if (key === 'Topics') {
          return item.topic;
        } else if (key === 'Region') {
          return String(item.region).toLowerCase() === value.toLowerCase();
        } else if (key === 'PEST') {
          return String(item.pestle).toLowerCase() === value.toLowerCase();
        } else if (key === 'City') {
          return String(item.city).toLowerCase() === value.toLowerCase();
        } else if (key === 'Source') {
          return String(item.source).toLowerCase() === value.toLowerCase();
        } else if (key === 'Sector') {
          return String(item.sector).toLowerCase() === value.toLowerCase();
        }
        return String(item[key]).toLowerCase().includes(value.toLowerCase());
      });
    });
    setFilteredData(filtered);
    if (Object.values(filterData).every((val) => val === '')) {
      setFilteredData([]);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Data Visualization Dashboard</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" circle="true" p={10}>
            <FiltersComponent applyFilters={applyFilters} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper variant="outlined" circle="true" p={10}>
            <ChartComponent data={filteredData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContent;
