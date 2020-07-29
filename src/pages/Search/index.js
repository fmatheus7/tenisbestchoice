import React, { useState } from 'react';
import './styles.css';
import Shoes from '../Shoes/Index';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

export default function Search() {
  // Tab from Material-UI
  const [value, setValue] = React.useState(0);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  // Hooks
  const [shoePreferences, setShoePreferences] = useState({
    drop: '',
    weight: '',
    damping: '',
    training: '',
  });
  // HandleChanges
  function onChange(e) {
    setShoePreferences({
      ...shoePreferences,
      [e.target.name]: e.target.value,
    });
    console.log(shoePreferences);
  }
  // Page

  return (
    <div className="search-input-grid">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          className="tabs"
        >
          <Tab label="Amortecimento" {...a11yProps(0)} />
          <Tab label="Drop" {...a11yProps(1)} />
          <Tab label="Peso" {...a11yProps(2)} />
          <Tab label="Tipo de Treino" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Select
          name="damping"
          onChange={onChange}
          outlined
          className="select-item"
        >
          <MenuItem value={'light'}>Leve</MenuItem>
          <MenuItem value={'soft'}>Suave</MenuItem>
          <MenuItem value={'extra-soft'}>Extra suave</MenuItem>
        </Select>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Select name="drop" onChange={onChange} className="select-item">
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Select name="weight" onChange={onChange} className="select-item">
          <MenuItem value={'heavy'}>Pesado</MenuItem>
          <MenuItem value={'medium'}>Medio</MenuItem>
          <MenuItem value={'light'}>Leve</MenuItem>
        </Select>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Select name="training" onChange={onChange} className="select-item">
          <MenuItem value={'running'}>Corrida</MenuItem>
          <MenuItem value={'shooting'}>Rodagem</MenuItem>
          <MenuItem value={'competition'}>Competição</MenuItem>
        </Select>
      </TabPanel>
      <Typography variant="h5">Suas caracteristicas selecionadas</Typography>
      <Typography variant="overline">{`Amortecimento = ${
        shoePreferences.damping
      } ✓
        Drop = ${shoePreferences.drop} ✓
        Peso = ${shoePreferences.weight} ✓
        Tipo de treino = ${shoePreferences.training.toUpperCase()}`}</Typography>
      <Shoes busca={shoePreferences} />
    </div>
  );
}
