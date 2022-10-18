import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Slider from "@mui/joy/Slider";
import { Box } from "@mui/system";
import { CssVarsProvider } from "@mui/joy/styles";
import { Input } from "@mui/joy";
import { Grid } from "@mui/material";

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
  function addperson() {
    peoplestats.push(
      {
        "firstname": "",
        "lastname":"",
        "start":0,
        "end":24
      }

    )
  }
  console.log(peoplestats);
  var min = 0;
  var max = 24;
  //get start
  var index = 0;
  function sliderchange(event: Event, newValue: number[]) {
    console.log(newValue);
    console.log(event);
    peoplestats[0].start = newValue[0];
    peoplestats[0].end = newValue[1];
  }
  function inputchange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }
  return (
    <Box>
      <button onClick={() => closeDayOverview()}>Close</button>
      <h1>{monthNames[props.date.getMonth()] + " " + props.date.getDate()}</h1>
      <button onClick={addperson}>add</button>
      {peoplestats.map((value: any) => {
        index++;
        return (
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            columnSpacing={0}
          >
            <CssVarsProvider defaultMode="dark">
              <Grid item xs={1}>
                <h2>{value.firstname}</h2>
              </Grid>

              <Grid item xs={0.5}>
                <Input
                  onChange={inputchange}
                  type="number"
                  defaultValue={value.start}
                  key={JSON.stringify({ index: index })}
                  sx={{}}
                ></Input>
              </Grid>

              <Grid item xs={0.5}>
                <Input
                  onChange={inputchange}
                  type="number"
                  defaultValue={value.end}
                  key={JSON.stringify({ index: index })}
                  sx={{}}
                ></Input>
              </Grid>

              <Grid item xs={0.5}>
                <p style={{ textAlign: "center" }}>{min}</p>
              </Grid>

              <Grid item xs={9}>
                <Slider
                  onChangeCommitted={sliderchange}
                  marks
                  sx={{
                    "--Slider-track-size": "34px",
                    "--Slider-mark-size": "10px",
                    "--Slider-thumb-size": "28px",
                    "--Slider-thumb-width": "10px",
                    "--Slider-valueLabel-arrowSize": "-25px",
                    width: "100%",
                  }}
                  min={min}
                  max={max}
                  step={1}
                  defaultValue={[value.start, value.end]}
                  key={JSON.stringify({ index: index })}
                  getAriaValueText={timetext}
                  valueLabelDisplay="auto"
                />
              </Grid>

              <Grid item xs={0.5}>
                <p style={{ textAlign: "center" }}>{max}</p>
              </Grid>
            </CssVarsProvider>
          </Grid>
        );
      })}
    </Box>
  );
}

function closeDayOverview() {
  document.getElementById("overviewroot").remove();
}
