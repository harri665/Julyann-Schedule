import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Avatar from "@mui/joy/Avatar";
import Textarea from "@mui/joy/Textarea";
import Slider from "@mui/joy/Slider";
import { Grid } from "@mui/material";

export default function AddPersonDay(props: any) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [start, setstart] = useState(0);
  const [end, setend] = useState(0);

  function close() {
    document.getElementById("addperson").remove(); 
  }
  function sliderchange(event: Event, newValue: number[]) {
    setstart(newValue[0])
    setend(newValue[1])
  }
  function addperson() {
      
    props.schedule.addPersonDayDate(props.date,firstname,lastname,start,end)
    close();
    props.resetparent();
     
     
  }
  
  console.log(props.schedule.getPeopleDefault())
  return (
    <List>
      <ListItem>ADD PERSON</ListItem>
      <ListItem>
        <Select defaultValue={"SELECT PERSON"}>
            <Option value = "SELECT PERSON">
                Select Person
            </Option>
          {props.schedule.getPeopleDefault().map((person: any) => {
            return (
                <Option value={person.firstname}>
                <ListItemDecorator>
                  <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                </ListItemDecorator>
                Harrison
              </Option>
            ); 
          })}
        </Select>
      </ListItem>
      <ListItem >
        FirstName
        <Textarea onChange={(e) => setfirstname(e.target.value)}/>
      </ListItem>
      <ListItem>
        LastName
        <Textarea onChange={(e) => setlastname(e.target.value)}/>
      </ListItem>
      <ListItem>
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
          min={0}
          max={24}
          step={1}
          defaultValue={[start, end]}
          valueLabelDisplay="auto"
        />
      </ListItem>
      <ListItem>
        <Button onClick={addperson}>Save</Button>
      </ListItem>
      <ListItem>
        <Button color="danger"onClick = {close}>cancel</Button>
      </ListItem>

    </List>
  );
}
