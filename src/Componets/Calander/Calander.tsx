import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Day from './Day';
import ReactDOM from 'react-dom/client';
import DayOverview from '../DayOverview/DayOverview';
import { useSlotProps } from '@mui/base';

const Frame = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  color:"white"; 
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #054da7;
  color:"white"; 
`;

const Button = styled.div`
  cursor: pointer;
  color:"white"; 
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color:"white"; 
`;







export default function Calendar(props:any) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const remaining = new Date(year,month+1,0).getDay()
  const [seed, setSeed] = useState(1);
  const reset = () => {
       setSeed(Math.random());
   }

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <Frame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <div className='day' key={d}>
            <strong>{d}</strong>
            
          </div>
        ))}
        
        {Array(days[month] + (startDay + (6-remaining)))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            // console.log(index,new Date(year ,month,d))
            return (
              <Day
                key={index}
                index = {index}
                schedule = {props.schedule}
                date = {new Date(year, month, d)}
                onClick={() => openDayOverview(new Date(year, month, d),props)}
              >
                {d > 0 ? d : ''}
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}

function openDayOverview(datein:Date, props:any) {
  // var overviewroot = document.createElement("div"); 
  // overviewroot.id = "overviewroot"; 
  // document.body.appendChild(overviewroot)
  
  const root = ReactDOM.createRoot(document.querySelector("#root"))
  root.render(
    
    <DayOverview date = {datein} schedule = {props.schedule}/>
    
  )


}