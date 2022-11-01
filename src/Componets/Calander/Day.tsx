import * as React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Box from "@mui/joy/Box";
import Slider, { sliderClasses } from "@mui/joy/Slider";
import { CssVarsProvider } from "@mui/joy/styles";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Avatar from "@mui/joy/Avatar";

export default function Day(props: any) {
  // console.log(props.date.getMonth() - 1, props.date.getDate() - 1);
  
  var schedule = props.schedule.getDayDate(props.date); 
  //catch some erros
  if (schedule == undefined) {
    console.error(
      "Error in Day Could not find Schedule",
      "schedule",
      schedule,
      "date",
      props.Date
    );
    return (
      <div
        className={"error day"}
        onMouseEnter={() => hover(Math.trunc(props.index / 7))}
      >
        <CssVarsProvider>
          <List
            // key = {props.key}
            onClick={props.onClick}
            variant="outlined"
            sx={{
              width: "100%",
              "--list-gap": "0px",
              "--List-item-minHeight": "3px",
              "--List-item-paddingY": "0px",
              "--List-item-paddingX": "12px",
              "--List-decorator-size": "32px",
              "--List-divider-gap": "1px",
            }}
          >
            <ListItem
              sx={{
                color: "lightblue",
              }}
            >
              {"ERROR"}
            </ListItem>
          </List>
        </CssVarsProvider>
      </div>
    );
  }
  if (schedule.people == undefined) {
    console.error("schedule.people not found in Day.tsx ")
    return <h1>ERROR</h1>;
  }
  // console.log(schedule, props.date);
  let weekclass = "week" + Math.trunc(props.index / 7);
  let classes = weekclass + " day";
  function hover(week: any) {
    document.getElementsByClassName(weekclass);
  }
  return (
    <div
      className={classes}
      onMouseEnter={() => hover(Math.trunc(props.index / 7))}
    >
      <CssVarsProvider>
        <List
          // key = {props.key}
          onClick={props.onClick}
          variant="outlined"
          sx={{
            width: "100%",
            "--list-gap": "0px",
            "--List-item-minHeight": "3px",
            "--List-item-paddingY": "0px",
            "--List-item-paddingX": "12px",
            "--List-decorator-size": "32px",
            "--List-divider-gap": "1px",
            "--List-radius": "20px"
          }}
        >
          <ListItem
            sx={{
              color: "lightblue",
            }}
          >
            {props.date.getDate()}
          </ListItem>

          {schedule.people.map((value: any) => (
            <ListItem
              sx={{
                color: "white",
              }}
            >
              <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                <Avatar size="sm" src="/static/images/avatar/1.jpg" />
              </ListItemDecorator>
              {value.firstname + " " + value.lastname.substr(0, 1)}
            </ListItem>
          ))}
        </List>
      </CssVarsProvider>
    </div>
  );
}
