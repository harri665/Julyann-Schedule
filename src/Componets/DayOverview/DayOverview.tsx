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
import AddPersonDay from "./AddPersonDay";
import Calendar from "../Calander/Calander";
import Avatar from "@mui/joy/Avatar";
import EditPersonWeek from "../EditPersonWeek";
const divStyle = {
  // textalign:'justify',
};
const spanStyle = {
  backgroundcolor: "red",
  width: "100%",
  height: "1em",
  display: "inline-block",
};
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
  // fill time array
  const openeditpersonweek = (value:any)=> {
    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(<EditPersonWeek
    date = {props.date}
    schedule = {props.schedule}
    />);
  }
  var times = [];
  for (let x = 0; x <= 24; x++) {
    times.push(x);
  }

  // console.log(props.date)
  //const [firstname, setfirstname] = useState("");
  const [peoplestats, setpeoplestats] = useState(
    props.schedule.getDayDate(props.date).people
  );
  // const [update,setupdate] = useState(props.schedule.UPDATE)
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };
  // var peoplestats = props.schedule.getDayDate(props.date).people;

  function addperson() {
    var overviewroot = document.createElement("div");
    overviewroot.id = "addperson";
    document.body.appendChild(overviewroot);

    const root = ReactDOM.createRoot(document.querySelector("#addperson"));

    root.render(
      <div>
        <AddPersonDay
          schedule={props.schedule}
          date={props.date}
          seed={seed}
          resetparent={reset}
        />
      </div>
    );
  }
  console.log(peoplestats);
  var min = 0;
  var max = 24;
  //get start
  var index = 0;
  function closeDayOverview() {
    // document.getElementById("overviewroot").remove();
    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(<Calendar schedule={props.schedule} />);
  }
  // function sliderchange(event: Event, newValue: number[]) {
  //   console.log(newValue);
  //   console.log(event);
  //   peoplestats[0].start = newValue[0];
  //   peoplestats[0].end = newValue[1];
  // }
  function inputchange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }
   const removeperson = (value: any) =>{
    console.log(peoplestats);
    props.schedule.removePersonDayDate(
      props.date,
      value.firstname,
      value.lastname
    );

    setpeoplestats(props.schedule.getDayDate(props.date).people);
    reset();
    props.schedule.saveALL()
    console.log(peoplestats);
  }
  return (
    <Box>
      <Button color="danger" onClick={() => closeDayOverview()}>
        Close
      </Button>
      <h1>{monthNames[props.date.getMonth()] + " " + props.date.getDate()}</h1>
      <Button onClick={addperson}>add</Button>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        columnSpacing={0}
      >
        <Grid item xs={4}></Grid>
        {times.map((value: any) => {
          return (
            <Grid item xs={7 / times.length}>
              <p>{value}</p>
            </Grid>
          );
        })}

        <Grid item xs={1}></Grid>
      </Grid>

      {peoplestats.map((value: any) => {
        index++; 
        return (
          <PersonDayData
            value={value}
            min={min}
            max={max}
            index={index}
            key={index}
            removeperson = {removeperson}
            openeditpersonweek = {openeditpersonweek}
          />
        );
      })}
    </Box>
  );
}





























function PersonDayData(props: any) {


  const [slidervalue, setslidervalue] = useState([
    props.value.start,
    props.value.end,
  ]);
  const [textstart, settextstart] = useState(props.value.start);
  const [textend, settextend] = useState(props.value.end);
  function sliderchange(event: Event, valin: any) {
    // console.log("HEY IT WORKS FOR REAL ", valin)
    setslidervalue(valin);
    settextstart(String(valin[0]));
    settextend(String(valin[1]));
  }
  function textstartchange(event: Event, valin: number) {
    settextstart(valin);
    let temp: any = [parseInt(textstart), parseInt(textend)];
    setslidervalue(temp);
  }
  function textendchange(event: Event, valin: number) {
    settextend(valin);
    let temp: any = [parseInt(textstart), parseInt(textend)];
    setslidervalue(temp);
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      columnSpacing={0}
    >
      <CssVarsProvider defaultMode="dark">
        <Grid item xs={0.5}>
          <Avatar size="sm" src="/static/images/avatar/3.jpg" />
        </Grid>
        <Grid item xs={1}>
          <Button onClick={()=>props.openeditpersonweek(props.value)}>
            {props.value.firstname + " " + props.value.lastname.charAt(0)}
          </Button>
        </Grid>

        <Grid item xs={1}>
          <Input
            onChange={settextstart}
            type="number"
            defaultValue={textstart}
            key={JSON.stringify({ index: props.index })}
            sx={{}}
          ></Input>
        </Grid>

        <Grid item xs={1}>
          <Input
            onChange={settextend}
            type="number"
            defaultValue={textend}
            key={JSON.stringify({ index: props.index })}
            sx={{}}
          ></Input>
        </Grid>

        <Grid item xs={0.5}>
          <p style={{ textAlign: "center" }}>{props.min}</p>
        </Grid>

        <Grid item xs={7}>
          <Slider
            key={`slider-${slidervalue}`}
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
            min={props.min}
            max={props.max}
            step={1}
            defaultValue={slidervalue}
            // key={JSON.stringify({ index: index })}
            getAriaValueText={timetext}
            valueLabelDisplay="auto"
          />
        </Grid>

        <Grid item xs={0.5}>
          <p style={{ textAlign: "center" }}>{props.max}</p>
        </Grid>
        <Grid item xs={0.5}>
          <Button color="danger"onClick={() => props.removeperson(props.value)}>X</Button>
        </Grid>
      </CssVarsProvider>
    </Grid>
  );
}
//
