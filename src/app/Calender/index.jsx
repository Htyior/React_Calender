import React, {useState, useMemo} from "react";
import moment from "moment";
import "./styles.css";

function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);
    const dates = [];
  
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }


export default function Calender(){
    const days = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fri"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"]
    const daysInMonth30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const daysInMonth31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    let dayss = "";

    const today = moment().format('DD');
    const month = moment().format('MM');
    const year = moment().format('YYYY');
    const startOfMonth = moment().clone().startOf('month').format('YYYY-MM-DD hh:mm');
    const firstDayOfMonth = moment().startOf('month')

    const beforeMonth = [];
    const afterMonth = [];

    const date = new Date();
    date.setDate(1);

    const lastDay = new Date(date.getFullYear(),
    date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(),
    date.getMonth() + 1, 0).getDate();

    const lastDayIndex = new Date(date.getFullYear(),
    date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const firstDayIndex = date.getDay();

    const daysInMonthj = moment("2022-06", "YYYY-MM").daysInMonth()

    const [monthh, setMonth] = useState(month)
    const [yearr, setYear] = useState(year)

function daysInMonthDays() {
    if (daysInMonthj === 31){
      return(
        daysInMonth31.map(day =>
          <div className="day">{day}</div>
          )
        )
    }else{
      return(
        daysInMonth30.map(day =>
          <div className="day">{day}</div>
          )
        )
        }
      }

for (let x=firstDayIndex; x>0; x--){
  beforeMonth.push(prevLastDay - x + 1)
}

for (let j=1; j<=nextDays; j++){
  afterMonth.push(days)
  console.log(afterMonth)
}

    return(
        <>
            <div className="table">

                <span className="container1">{today}/{monthh}/{yearr}</span>

                <div className="container2">
                    <select className="monthOption" onChange={(e) => setMonth(e.target.value)} defaultValue = {monthh}>
                    {
                        months.map(month => 
                            <option>{month}</option>
                            )
                    }
                    </select>
                </div>

                <div className="container3">
                <select className="yearOption" onChange={(e) => setYear(e.target.value)} defaultValue = {yearr}>
                    {
                        years.map(year =>
                            <option>{year}</option>
                            )
                    }
                </select>
                </div>

                <div className="calender">
                    <div className="weeks">


                        {
                        days.map((weekDays) => 
                        <div className="w">
                            {weekDays}
                        </div>
                        )}
                    </div>

                    <div>
                    {
                      beforeMonth.map((beforeDay) =>
                      <div className="dayOtherMonth">
                        {beforeDay}
                      </div>
                      )}

                            {daysInMonthDays()}
                            {console.log(firstDayOfMonth)}

                    </div>
                    
                </div>
                <button className="button1">Cancle</button>
                <button className="button2" onClick={() => console.log(1)}>From Date</button>
            </div>        
        </>
    );
}
