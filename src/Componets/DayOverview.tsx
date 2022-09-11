import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Slider from "@mui/joy/Slider";
import { Box } from "@mui/system";
import { CssVarsProvider } from "@mui/joy/styles";
import { Input } from "@mui/joy";



const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
export default function (props: any) {
  // console.log(props.date)

  var peoplestats =
    props.schedule.Year[props.date.getMonth() - 1][props.date.getDate() - 1]
      .people;
  console.log(peoplestats);
  var min = 0;
  var max = 24;
  //get start

  return (
    <Box>
      <button onClick={() => closeDayOverview()}>Close</button>
      <h1>{monthNames[props.date.getMonth()] + " " + props.date.getDate()}</h1>
      {peoplestats.map((value: any) => {
        return (
          <CssVarsProvider defaultMode="dark">
            <h2>{value.firstname}</h2>
            <Input>
            </Input>
            <p>{min}</p>
            <Slider
              marks
              sx={{
                "--Slider-track-size": "34px",
                "--Slider-mark-size": "10px",
                "--Slider-thumb-size": "28px",
                "--Slider-thumb-width": "10px",
                "--Slider-valueLabel-arrowSize": "-25px",
              }}
              min={min}
              max={max}
              step={1}
              defaultValue={[value.start, value.end]}
              getAriaValueText={timetext}
              valueLabelDisplay="auto"
            />
            <p>{max}</p>
          </CssVarsProvider>
        );
      })}
    </Box>
  );
}

function closeDayOverview() {
  document.getElementById("overviewroot").remove();
}
