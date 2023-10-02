import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const FiltersComponent = ({ applyFilters }) => {
  const [filterData, setFilterData] = useState({
    End_Year: '', // Make sure the keys match your data properties
    Topics: '',
    Sector: '',
    Region: '',
    PEST: '',
    Source: '',
    Country: '',
    City: '',
  });

  const handleApplyFilters = () => {
    applyFilters(filterData);
  };

  const isFilterEmpty = Object.values(filterData).every((val) => val === '');

  const handleResetFilters = () => {
    setFilterData({
      End_Year: '', // Reset all filters
      Topics: '',
      Sector: '',
      Region: '',
      PEST: '',
      Source: '',
      Country: '',
      City: '',
    });
    applyFilters({});
    return;
  };

  return (
    <>
      <div className="filters-container">
        {Object.entries(filterData).map(([key, value]) => (
          <div key={key} className="filter-group">
            <label htmlFor={key}>{key}</label>
            <input
              id={key}
              type="text"
              className="filter-input"
              value={value}
              onChange={(e) =>
                setFilterData({ ...filterData, [key]: e.target.value })
              }
            />
          </div>
        ))}
      </div>
      <Stack spacing={2} direction="row" margin={2} paddingLeft={5}>
        <Button
          variant="contained"
          size="small"
          onClick={handleApplyFilters}
          disabled={isFilterEmpty}
        >
          Apply Filters
        </Button>
        <Button variant="contained" size="small" onClick={handleResetFilters}>
          Reset Filters
        </Button>
      </Stack>
    </>
  );
};

export default FiltersComponent;
