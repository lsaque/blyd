export function setHourRemaining(type: number) {
  if(type == 1) return 1;
  else if(type == 2) return 3;
  else return 0;
}

export function setDayRemaining(type: number) {
  if(type == 3) return 1;
  else if(type == 4) return 3;
  else return 0;
}

export function getFinalDate(day: number, hour: number) {

  const date = new Date();

  let totalDay;

  let addDay = 0;
  let addMonth = 0;
  let addYear = 0;

  let dayTime = date.getDate();
  let monthTime = date.getMonth() + 1;
  let yearTime = date.getFullYear();
  let hourTime = (date.getHours() + hour) % 24;
  let minuteTime = date.getMinutes();

  //Add manual values
  // let dayTime = 31;
  // let monthTime = 12;
  // let yearTime = date.getFullYear();
  // let hourTime = (23 + hour) % 24;
  // let minuteTime = date.getMinutes();

  if (day == 0) {
    if (date.getHours() > hourTime) addDay = 1;
  } else addDay = day;  

  if (monthTime % 2 == 0) {
    if (monthTime == 2) totalDay = 28;
    else if (monthTime == 4 || monthTime == 6) totalDay = 30;
    else totalDay = 31;
  } else {
    if (monthTime <= 7) totalDay = 31;
    else totalDay = 30;
  }

  if (dayTime + addDay > totalDay) addMonth = 1;
  if (monthTime + addMonth > 12) addYear = 1;

  dayTime = (dayTime + addDay) % (totalDay + 1);
  dayTime = dayTime == 0 ? 1 : dayTime;
  monthTime = (monthTime + addMonth) % 13;
  monthTime = monthTime == 0 ? 1 : monthTime;
  yearTime += addYear;

  return `${dayTime}-${monthTime}-${yearTime}-${hourTime}-${minuteTime}`;
}

export function getNowDate() {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
}

export function getTimeDuration(day: number, hour: number) {
  if(day == 0) return `${hour}h`
  else return`${day}d`
}

export function setAdviceHour(date: string) {
  const splittedDate = date.split("-");
  return `${splittedDate[3]}:${splittedDate[4]}`;
}

export function setDueDate(date: string) {
  const splittedDate = date.split("-");

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return [splittedDate[0], monthNames[parseInt(splittedDate[1]) - 1], splittedDate[2],splittedDate[3],splittedDate[4],];
}

// DIA 0 - MES 1 - ANO 2 - HORA 3 - MINUTE 4