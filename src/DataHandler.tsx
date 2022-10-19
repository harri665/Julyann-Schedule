// var fs = require('fs');
// var fs = remote.require('fs');
// import * as fs from 'fs';
// const fs = require('fs');
// import * as fs from 'fs';
const fs = require("fs");
// import * as React from "react";

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export class DataHandler {
    
    SCHEDULES:any =[]; 
    CURDATE = new Date(); 
    constructor() {
        console.log("started"); 
    }
    getDayDate(datein:any):any {
        return (this.getMonth(datein.getMonth(),datein.getFullYear())[datein.getDate()-1]); 
    }
    getDay(day:any ,month:any ,year:any):any { 


        return (this.getMonth(month-1,year)[day-1]); 
        
    }
    getMonth(month:any, year:any):any {

        return (this.getYear(year)[month-1]); 
    }
    getYear(yearin:any):any {
        
        //check for file existance if not create one 
        //check year exists already 
        for(let x =0; x < this.SCHEDULES.length; x++) {
            if(yearin==this.SCHEDULES[x].properties.FullYear) {
                return this.SCHEDULES[x].Year; 
            }
        }
        var Year; 
        if(!fs.existsSync("./src/Schedules/"+yearin+".json")) {
            Year = {"properties": {"FullYear":yearin},"Year": []}; 
            var DAYSTOUSE = DAYS;   
            if((yearin % 100 === 0) ? (yearin % 400 === 0) : (yearin % 4 === 0)) {DAYSTOUSE = DAYS_LEAP}
            for(let x =0; x < 12;x++) {
                var Month = [];  
                for(let y =0; y < DAYSTOUSE[x]; y++) {
                    Month.push({"daystats": {},"people": []})
                }
                Year.Year.push(Month); 
            }
            this.SCHEDULES.push(Year); 
            this.saveYear(yearin)
            return Year.Year; 
        } else {
            Year = require("./Schedules/"+yearin+".json")
            this.SCHEDULES.push(Year)
            return Year.Year; 
        }
        
    }
    saveYear(year:number):void {
        for(let x =0; x < this.SCHEDULES.length; x++) {
            if(this.SCHEDULES[x].properties.FullYear == year) {
                console.log(this.SCHEDULES[x],year)
                fs.writeFile("./src/Schedules/"+year+".json",JSON.stringify(this.SCHEDULES[x]),function (err:any) {if (err) throw err;});
            }
        }
    }
    saveALL():void {
        for(let x=0; x< this.SCHEDULES.length; x++) {
            this.saveYear(this.SCHEDULES.properties.FullYear); 
        }
    }

}