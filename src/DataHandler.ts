var fs = require('fs');
// var fs = remote.require('fs');
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
        var DayToGet = new Date(); 
        DayToGet.setDate(day); 
        DayToGet.setMonth(month); 
        DayToGet.setFullYear(year) 


        return (this.getMonth(DayToGet.getMonth(),DayToGet.getFullYear())[DayToGet.getDate()-1]); 
        
    }
    getMonth(month:any, year:any):any {
        // returns Month 
        // month 
        var DaytoGet = new Date(); 
        // returns Year 
        // month year 

        DaytoGet.setMonth(month); 
        DaytoGet.setFullYear(year); 

        return (this.getYear(year)[DaytoGet.getMonth()-1]); 
    }
    getYear(year:any):any {
        //check for file existance if not create one 
        var Year; 
        if(!fs.existsSync("./Schedules/"+year+".json")) {
            fs.writeFile("./Schedules/"+year+".json",'{"properties": {"FullYear":'+year+'},"Year": []}',()=> {console.error("error")}); 
            Year = require("./Schedules/"+year+".json"); 
            var DAYSTOUSE = DAYS; 
            if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {DAYSTOUSE = DAYS_LEAP}
            for(let x =0; x < 12;x++) {
                Year.Year.push([]); 
                for(let y =0; y < DAYSTOUSE[x]; y++) {
                    var daytemplate:string; 
                    if(y != 0){daytemplate+=","}
                    daytemplate += '{"daystats": {},"people": []}'; 
                    Year.Year[x].push(JSON.parse(daytemplate)); 
                }
            }
        }
        
    }
}