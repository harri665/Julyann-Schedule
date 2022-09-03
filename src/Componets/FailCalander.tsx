

import * as React from 'react';

export default function Calander(props:any) {
    console.log(props.date);
    const din = new Date(props.date);
    const firstofmonth = new Date(din.getFullYear(),din.getMonth(),1);
    const endofmonth = new Date(din.getFullYear(),din.getMonth(),getDaysInMonth(din.getMonth(),din.getFullYear()));

    //setup the month array
    const monthdayarr = [];
    for(let x =0; x< firstofmonth.getDay(); x++) {
        const td = new Date()
        if(din.getMonth() == 0){
            td.setFullYear(din.getFullYear()-1);
            td.setMonth(11);
        } else {
            td.setFullYear(din.getFullYear());
            td.setMonth(din.getMonth()-1);
        }
        const dinm = getDaysInMonth(td.getMonth(),td.getFullYear());
        console.log(dinm,td.getFullYear(),td.getMonth());
        td.setDate(dinm-x);
        monthdayarr.push({date:td});
    }
    console.log(monthdayarr)
    for(let dayofmonth =0; dayofmonth < getDaysInMonth(din.getMonth(),din.getFullYear()); dayofmonth++) {
        const td = new Date(din.getFullYear(),din.getMonth(),dayofmonth+1);
        monthdayarr.push({date:td});
    }

    for(let x = 0; x < 7-(endofmonth.getDay()); x++) {
        const td = new Date(din.getFullYear(),din.getMonth(),x);
        monthdayarr.push({date:td});
    }
    const monthweekarr = []
    for(let y = 0; y< monthdayarr.length; y++) {
      let tarr = [];
      tarr.push(monthdayarr[y])
      if(y%7 == 0) {
        monthweekarr.push(tarr)
        tarr = []
      }
    }
    console.log(monthweekarr)
    const main = <table></table>
    
    return(
        <table>
            <tr>
                <td></td>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            <tr>
                
            </tr>







        </table>
    )
}

function DayElement(props:any) {
    return 0;
}

function getDaysInMonth(month:any,year:any) {

   return new Date(year, month+1, 0).getDate();

}
