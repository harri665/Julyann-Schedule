import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider, { sliderClasses } from '@mui/joy/Slider';
import { CssVarsProvider } from '@mui/joy/styles';
function valueText(value: number) {
  return `${value}°C`;
}

export default function DayRange() {
  let a =0;
  let b = 12; 
  return (
    <CssVarsProvider>
    <Box sx={{ width: "100%" }}>
      <Slider
      
        min = {0}
        max = {24}
        step = {1}
        track={'normal'}
        defaultValue={[0, 24]}
        getAriaLabel={() => 'Amount'}
        getAriaValueText={valueText}
        marks
        valueLabelDisplay="on"
        sx={{
          "--Slider-track-size": "30px",
          "--Slider-mark-size": "3px",
          "--Slider-thumb-size": "30px",
          "--Slider-thumb-width": "15px",
          "--Slider-valueLabel-arrowSize": "9px",
          // Need both of the selectors to make it works on the server-side and client-side
          [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
            [`&.${sliderClasses.markLabel}`]: {
              transform: 'none',
            },
            [`& .${sliderClasses.valueLabel}`]: {
              left: 'calc(var(--Slider-thumb-size) / 2 - 2px)', // 2px is the thumb border width
              borderBottomLeftRadius: 0,
              '&::before': {
                left: 0,
                transform: 'translateY(100%)',
                borderLeftColor: 'currentColor',
              },
            },
          },
          [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
            [`&.${sliderClasses.markLabel}`]: {
              transform: 'translateX(-100%)',
            },
            [`& .${sliderClasses.valueLabel}`]: {
              right: 'calc(var(--Slider-thumb-size) / 2 - 2px)', // 2px is the thumb border width
              borderBottomRightRadius: 0,
              '&::before': {
                left: 'initial',
                right: 0,
                transform: 'translateY(100%)',
                borderRightColor: 'currentColor',
              },
            },
          },
        }}
      />
    </Box>
    </CssVarsProvider>
  );
}
