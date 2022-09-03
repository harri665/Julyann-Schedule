import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Slider from '@mui/joy/Slider';
import ReactDOM from 'react-dom/client';
import MinimumDistanceSlider from './Componets/PersonDay';
import { CssVarsProvider } from '@mui/joy/styles';
import Calander from './Componets/Calander';


function render() {
  const root = ReactDOM.createRoot(document.querySelector("#root"))
  // const [value, setValue] = React.useState<number[]>([20, 37]);
  root.render(
    <Calander/>
  )
  
}

render();


