import { useState } from 'react'
//import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import './App.css'

const App=()=>{

  return (
    <>
     <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={10}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
    </Grid>
    </>
  )
}

export default App
