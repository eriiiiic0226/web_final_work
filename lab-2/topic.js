let topic = [
    "課程介紹",
    "環境安裝 &Lab1",
    "國定假日",
    "Lab2",
    "Lab3",
    "Lab4",
    "Lab5",
    "清明連假"
];


// 建立方便輸入日期的機制
let startDate = new Date();

function setMonthAndDay(startmonth,startday){
    startDate.setMonth(startmonth-1,startday);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
// setMonthAndDay(2,14);