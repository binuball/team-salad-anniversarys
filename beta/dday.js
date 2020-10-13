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

let nameList = ['ehdgh131', 'FGCounter', 'firsttwitch', 'GGUMONG', 'GGUMONGUseong', 'HeptagramMinedApple', 'IrisM', 'majapche', 'Maketeamsalad', 'ParkMo', 'playground', 'sleepground', 'teamsaladfancafe', 'Useong']

let varNameList = [ehdgh131remain, FGCounterremain, firsttwitchremain, GGUMONGremain, GGUMONGUseongremain, HeptagramMinedAppleremain, IrisMremain, majapcheremain, Maketeamsaladremain, ParkMoremain, playgroundremain, sleepgroundremain, teamsaladfancaferemain, Useongremain];

for (let i = 0; i < varNameList.length ; i++) {
  document.getElementById(nameList[i]).innerHTML += ` D-${varNameList[i]}`;
}