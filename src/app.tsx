import * as React from 'react';
import { styled, useColorScheme } from '@mui/material/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import Calander from './Componets/Calander/Calander';
import { getInitColorSchemeScript } from '@mui/joy/styles';

var PrevSchedule = require('./Schedules/Y2021.json')
var CurSchedule = require('./Schedules/Y2022.json')
var NextSchedule = require('./Schedules/Y2023.json')
function render() {
  const root = ReactDOM.createRoot(document.querySelector("#root"))
  // const [value, setValue] = React.useState<number[]>([20, 37]);
  // getInitColorSchemeScript()
  // const { mode, setMode } = useColorScheme();
  // setMode('dark');
  root.render(
    <CssVarsProvider
      defaultMode='dark'
    >
      <Calander schedule = {CurSchedule}/>
    </CssVarsProvider>
  )
  
}

render();


