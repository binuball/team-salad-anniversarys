function d_day(month, day) {
  var currentTime = new Date()
  var yearOfTheEvent = currentTime.getFullYear()
  var eventDate = new Date( yearOfTheEvent, month - 1, day )
  var isItBirthday = currentTime.getMonth() === month - 1 && currentTime.getDate() === day
  var now = new Date()

  if ( now > eventDate ) {
    eventDate = new Date( yearOfTheEvent + 1, month - 1, day )
  } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
    eventDate = new Date( now.getFullYear(), month - 1, day )
  }

  var currentTime = now.getTime()
  var eventTime = eventDate.getTime()
  var remainingTime = eventTime - currentTime

  var seconds = Math.floor( remainingTime / 1000 )
  var minutes = Math.floor( seconds / 60 )
  var hours =  Math.floor( minutes / 60 )
  var days = Math.floor( hours / 24 )

  hours %= 24
  minutes %= 60
  seconds %= 60

  var day = days
  var hour = hours
  var minute = minutes
  var second = seconds

  var dday = days + 1

  if (isItBirthday) {
    dday = "Day"
  }

  return dday
}

if (d_day(1, 12) === "Day") {
  var IrisMremain = "Day";
} else {
  var IrisMremain = parseInt(d_day(1, 12));
}

if (d_day(2, 3) === "Day") {
  var FGCounterremain = "Day";
} else {
  var FGCounterremain = parseInt(d_day(2, 3));
}

if (d_day(4, 23) === "Day") {
  var HeptagramMinedAppleremain = "Day";
} else {
  var HeptagramMinedAppleremain = parseInt(d_day(4, 23));
}

if (d_day(6, 12) === "Day") {
  var playgroundremain = "Day";
} else {
  var playgroundremain = parseInt(d_day(6, 12));
}

if (d_day(6, 15) === "Day") {
  var firsttwitchremain = "Day";
} else {
  var firsttwitchremain = parseInt(d_day(6, 15));
}

if (d_day(6, 23) === "Day") {
  var majapcheremain = "Day";
} else {
  var majapcheremain = parseInt(d_day(6, 23));
}

if (d_day(8, 28) === "Day") {
  var GGUMONGremain = "Day";
} else {
  var GGUMONGremain = parseInt(d_day(8, 28));
}

if (d_day(8, 30) === "Day") {
  var Maketeamsaladremain = "Day";
} else {
  var Maketeamsaladremain = parseInt(d_day(8, 30));
}

if (d_day(9, 11) === "Day") {
  var ehdgh131remain = "Day";
} else {
  var ehdgh131remain = parseInt(d_day(9, 11));
}

if (d_day(10, 6) === "Day") {
  var ParkMoremain = "Day";
} else {
  var ParkMoremain = parseInt(d_day(10, 6));
}

if (d_day(10, 23) === "Day") {
  var teamsaladfancaferemain = "Day";
} else {
  var teamsaladfancaferemain = parseInt(d_day(10, 23));
}

if (d_day(12, 4) === "Day") {
  var GGUMONGUseongremain = "Day";
} else {
  var GGUMONGUseongremain = parseInt(d_day(12, 4));
}

if (d_day(12, 23) === "Day") {
  var Useongremain = "Day";
} else {
  var Useongremain = parseInt(d_day(12, 23));
}

if (d_day(12, 28) === "Day") {
  var sleepgroundremain = "Day";
} else {
  var sleepgroundremain = parseInt(d_day(12, 28));
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

var d_dayPerson = {
  "아이리스님 생일" : IrisMremain,
  "카운터님 생일" : FGCounterremain,
  "각별/마플님 생일" : HeptagramMinedAppleremain,
  "놀이터 생성일" : playgroundremain,
  "마플님 트위치 첫방송" : firsttwitchremain,
  "마잡채 유튜브 첫영상" : majapcheremain,
  "꾸몽님 생일" : GGUMONGremain,
  "팀샐러드 생성" : Maketeamsaladremain,
  "공룡님 생일" : ehdgh131remain,
  "파크모님 생일" : ParkMoremain,
  "팀샐 팬카페 설립" : teamsaladfancaferemain,
  "유몽커플 1일" : GGUMONGUseongremain,
  "유성님 생일" : Useongremain,
  "잠뜰님 생일" : sleepgroundremain
}

var d_days = [IrisMremain, FGCounterremain, HeptagramMinedAppleremain, playgroundremain, firsttwitchremain, majapcheremain, GGUMONGremain, Maketeamsaladremain, ehdgh131remain, ParkMoremain, teamsaladfancaferemain, GGUMONGUseongremain, Useongremain, sleepgroundremain].sort((a, b) => a - b);

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const eleven = document.getElementById('eleven');
const twelve = document.getElementById('twelve');
const thirteen = document.getElementById('thirteen');
const fourteen = document.getElementById('fourteen');

one.textContent = `${getKeyByValue(d_dayPerson, d_days[0])} : D-${d_days[0]}`;
two.textContent = `${getKeyByValue(d_dayPerson, d_days[1])} : D-${d_days[1]}`;
three.textContent = `${getKeyByValue(d_dayPerson, d_days[2])} : D-${d_days[2]}`;
four.textContent = `${getKeyByValue(d_dayPerson, d_days[3])} : D-${d_days[3]}`;
five.textContent = `${getKeyByValue(d_dayPerson, d_days[4])} : D-${d_days[4]}`;
six.textContent = `${getKeyByValue(d_dayPerson, d_days[5])} : D-${d_days[5]}`;
seven.textContent = `${getKeyByValue(d_dayPerson, d_days[6])} : D-${d_days[6]}`;
eight.textContent = `${getKeyByValue(d_dayPerson, d_days[7])} : D-${d_days[7]}`;
nine.textContent = `${getKeyByValue(d_dayPerson, d_days[8])} : D-${d_days[8]}`;
ten.textContent = `${getKeyByValue(d_dayPerson, d_days[9])} : D-${d_days[9]}`;
eleven.textContent = `${getKeyByValue(d_dayPerson, d_days[10])} : D-${d_days[10]}`;
twelve.textContent = `${getKeyByValue(d_dayPerson, d_days[11])} : D-${d_days[11]}`;
thirteen.textContent = `${getKeyByValue(d_dayPerson, d_days[12])} : D-${d_days[12]}`;
fourteen.textContent = `${getKeyByValue(d_dayPerson, d_days[13])} : D-${d_days[13]}`;

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.searchModal').style.display = "block"
});

function closeModal() {
  document.querySelector('.searchModal').style.display = "none"
}