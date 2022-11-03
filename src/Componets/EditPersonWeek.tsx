import * as React from "react";
import ReactDOM from "react-dom/client";

import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Slider from "@mui/joy/Slider";
import { Box } from "@mui/system";
import { CssVarsProvider } from "@mui/joy/styles";
import { Input } from "@mui/joy";
import { Grid } from "@mui/material";
import Button from "@mui/joy/Button";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
// import AddPersonDay from "./AddPersonDay";
import Calendar from "./Calander/Calander";
import Avatar from "@mui/joy/Avatar";
import zIndex from "@mui/material/styles/zIndex";
function test(value:number) {
    return(12)
}
function timetext(value: any) {
  let out = "";
  out += value % 12;
  if (value / 12 > 1) {
    out += "pm";
  } else {
    out += "am";
  }
  return out;
}
const DAYS_OF_THE_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
export default function (props: any) {
  var times = [];
  for (let x = 0; x < 24; x++) {
    times.push(x);
  }
  var min = 5; 
  var max =19; 
  //schedule
  // first nmae
  // last name
  // day in week

  // check if there is enough data

  // map date to week
  console.log(props.date.getDay());
  //
  var tempdate = props.date;
  tempdate.setDate(tempdate.getDate() - (tempdate.getDay() - 1));
  // console.log(tempdate)

  var weekdays = [];
  weekdays.push(new Date(tempdate));
  for (let x = 0; x < 6; x++) {
    tempdate.setDate(tempdate.getDate() + 1);
    // console.log(tday)
    weekdays.push(new Date(tempdate));
  }
  console.log(weekdays);
  var count = -1;
  return (
    <Box>
      <header>
        <Button> back </Button>
        <h1> Harrison Martin</h1>
        <Button> next </Button>
      </header>
      <body>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          columnSpacing={0}
        >
          <Grid item xs={12 / 8}></Grid>
          {weekdays.map((value: any) => {
            count++;
            return (
              <Grid item xs={12 / 8} sx={{ textAlign: "center" }}>
                <h1>{DAYS_OF_THE_WEEK[count]}</h1>
              </Grid>
            );
          })}
          <Grid item xs={12 / 8}>
            <Grid container direction="column" columnSpacing={0}>
              {times.map((value: any) => {
                return (
                  <Grid
                    item
                    sx={{
                      height: "20.8333",
                      fontSize: "100%",
                      border: "0",
                      margin: "0",
                      textAlign: "right",
                    }}
                  >
                    <p className="nobordermargin">{value}</p>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          {weekdays.map((value: any) => {
            const valueLabelFormat = (x:number) => "Hi " + x;
            return (
              <Grid item xs={12 / 8} sx = {{position:"relative"}}>
                <Slider
                
                  orientation="vertical"
                  //   key={`slider-${slidervalue}`}
                  //   onChangeCommitted={sliderchange}
                  marks
                  
                  sx={{
                    "--Slider-track-size": "34px",
                    "--Slider-mark-size": "10px",
                    "--Slider-mark-width": "34px",
                    "--Slider-thumb-size": "28px",
                    "--Slider-thumb-width": "34px",
                    "--Slider-valueLabel-arrowSize": "-25px",
                    width: "100%",
                    height: "500px",
                  }}
                  min={-24}
                  max={0}
                  step={1}
                  
                  defaultValue={[-12, -14]}
                  scale={x => -x}
                  // key={JSON.stringify({ index: index })}
                  getAriaValueText={timetext}
                  valueLabelDisplay="on"
                  valueLabelFormat = {valueLabelFormat}
                />
                <Box component="span" sx={{ 
                        visibility: "visible",
                        zIndex:1000000000000,
                        position:"absolute", 
                        top:0, 
                        width:"100%", 
                        backgroundColor: "black", 
                        opacity: "70%", 
                        
                    }}
                    height = {500*((min)/24)}
                    >
                </Box>
                <Box component="span" sx={{ 
                        visibility: "visible",
                        zIndex:1000000000000,
                        position:"absolute",  
                        width:"100%", 
                        backgroundColor: "black", 
                        opacity: "50%", 
                        
                    }}
                    height = {500*((min)/24)}
                    top = {500-500*((24-max)/24)}
                    >
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </body>
    </Box>
  );
}
