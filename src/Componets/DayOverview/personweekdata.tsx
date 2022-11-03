import * as React from "react";
import ReactDOM from "react-dom/client";

import { useState, useEffect } from "react";
import Slider from "@mui/joy/Slider";
import { CssVarsProvider } from "@mui/joy/styles";
import { Input } from "@mui/joy";
import { Grid } from "@mui/material";
import Button from "@mui/joy/Button";
import Avatar from "@mui/joy/Avatar";
import EditPersonWeek from "../EditPersonWeek";
export default function (props:any) {
    let min =0; 
    let max =0 ; 
    const [slidervalue, setslidervalue] = useState([props.value.start,props.value.end])
    const [textstart, settextstart] = useState(props.value.start)
    const [textend, settextend] = useState(props.value.end)
    function sliderchange(event: Event,valin:any) {
      // console.log("HEY IT WORKS FOR REAL ", valin)
      setslidervalue(valin); 
      settextstart(String(valin[0]));
      settextend(String(valin[1]));
    }
    function textstartchange(event: Event,valin:number) {
      settextstart(valin); 
      let temp:any = [parseInt(textstart),parseInt(textend)]
      setslidervalue(temp); 
    }
    function textendchange(event: Event,valin:number) {
      settextend(valin); 
      let temp:any = [parseInt(textstart),parseInt(textend)]
      setslidervalue(temp); 
    }
    function  personweek() {
      const root = ReactDOM.createRoot(document.querySelector("#root")); 
      root.render(
        <EditPersonWeek schedule = {props.schedule} date = {props.date}/>
      )
      
    }
    // index++;
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
            <Button
            onClick={personweek}
            >
              
              {props.value.firstname + " " + props.value.lastname.charAt(0)}
            </Button>
          </Grid>
  
          <Grid item xs={1}>
            <Input
              onChange={settextstart}
              type="number"
              defaultValue={textstart}
              // key={JSON.stringify({ index: index })}
              sx={{}}
            ></Input>
          </Grid>
  
          <Grid item xs={1}>
            <Input
              onChange={settextend}
              type="number"
              defaultValue={textend}
              // key={JSON.stringify({ index: index })}
              sx={{}}
            ></Input>
          </Grid>
  
          <Grid item xs={0.5}>
            <p style={{ textAlign: "center" }}>{0}</p>
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
              min={min}
              max={max}
              step={1}
              defaultValue={slidervalue}
              // key={JSON.stringify({ index: index })}
            //   getAriaValueText={timetext}
              valueLabelDisplay="auto"
            />
          </Grid>
  
          <Grid item xs={0.5}>
            <p style={{ textAlign: "center" }}>{24}</p>
          </Grid>
          <Grid item xs={0.5}>
            <Button color="danger" >X</Button>
          </Grid>
        </CssVarsProvider>
      </Grid>
    );
  }
  