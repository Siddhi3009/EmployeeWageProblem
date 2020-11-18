//constants
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
//variables
let totalEmpHrs=0;
let totalWorkingDays=0;
//employee wage array
let empDailyWageArr=new Array();
//employee wage calculation using working hours
function CalculateDailyWage(empHrs)
{
  return empHrs*WAGE_PER_HOUR;
}
//get daily working hours 
function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
       case IS_PART_TIME:
            return 4;
       case IS_FULL_TIME:
            return 8;
       default:
            return 0;
   }
}
//Adding daily employee wage to an array
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random()*10)%3;
  let empHrs = GetWorkingHours(empCheck);
  totalEmpHrs+=empHrs;
  empDailyWageArr.push(CalculateDailyWage(empHrs));
}
//Total wage calculation
let empWage=CalculateDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);
 //Total employee wage calculation using array foreach
let totalEmpWage=0;
function sum(dailyWage)
{
  totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);
//Total wage using reduce method of array
function totalWages(totalWage, dailyWage)
{
  return totalWage+dailyWage;
}
console.log("UC7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
//Array map helper function used
let dailyCounter=0;
function mapDayWithWage(dailyWage)
{
   dailyCounter++;
   return dailyCounter+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
 