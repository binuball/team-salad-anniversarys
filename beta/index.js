// 디데이 날짜 구하는 함수
function d_day(e,t){var a=(o=new Date).getFullYear(),l=new Date(a,e-1,t),r=new Date;r>l?l=new Date(a+1,e-1,t):r.getFullYear()===l.getFullYear()+1&&(l=new Date(r.getFullYear(),e-1,t));var o=r.getTime(),n=l.getTime()-o,g=Math.floor(n/1e3),u=Math.floor(g/60),f=Math.floor(u/60),w=Math.floor(f/24);t=w,f%=24,u%=60,g%=60;return w+1};
// key to value
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
// 기본 설정
let dayWrap = document.querySelector('.day-wrap');
let currentYear = new Date().getFullYear();
let lastYear = 1;
let reg = /Anniver/;
let reg2 = /birth/;
let lastDays = Math.floor((new Date(currentYear + 1, 0, 1) - new Date()) / (1000 * 60 * 60 * 24));

// 이름과 날짜, 보여줄 텍스트 입력
let ddayObj = {
  IrisMbirth : [1, 12],
  FGcounterbirth : [2, 3],
  Useongbirth : [12, 23],
  cristmas : [12, 25],
  GGUMONGbirth : [8, 28],
  Halloween : [10, 31],
  ParkMobirth : [10, 6],
  Sleepgroundbirth : [12, 28],
  HeptagramMinedApplebirth : [4, 23],
  Valentine : [2, 14],
  makeTeamSalad : [8, 30],
  ehdgh131birth : [9, 11],
  teamsaladfancafe : [10, 23],
  Pepero : [11, 11],
  lastOfYear : [12, 31],
  GGUMONGUseongAnniver : [2015, 12, 6],
  firsttwitchAnniver : [2019, 6, 15],
  willNot : [10, 15],
  YousungAnniver : [2020, 10, 19],
  Hangul : [10, 9]
}

// names이 class 이름에 사용됨
let names = ['IrisMbirth', 'FGcounterbirth', 'Useongbirth', 'cristmas', 'GGUMONGbirth', 'Halloween', 'ParkMobirth', 'Sleepgroundbirth', 'HeptagramMinedApplebirth', 'Valentine', 'makeTeamSalad', 'ehdgh131birth', 'teamsaladfancafe', 'Pepero', 'lastOfYear', 'GGUMONGUseongAnniver', 'firsttwitchAnniver', 'willNot', 'YousungAnniver','Hangul'];
let texts = ['아이리스님 생일' ,'운터님 생일', '유성님 생일', '크리스마스', '꾸몽님 생일', '할로윈', '파크모님 생일', '잠뜰님 생일', '각별/마플님 생일', '발렌타인 데이', '팀샐러드 생성', '공룡님 생일', '팀샐러드 팬캎 설립일', '빼빼로데이', '올해의 마지막날', '유몽커플', '마플님 트위치 첫방', '안해의 날', 'Yousung 채널 개설', '한글날'];
let daysObj = {};
let daysArray = [];

// div 만들고 출력함
for (let i = 0; i < names.length; i++) {
	let div = document.createElement("div");
  div.setAttribute("class", `day ${names[i]}`);
  dayWrap.appendChild(div);
}

for (let i = 0; i < names.length; i++) {
  let ddays = d_day(ddayObj[names[i]][0], ddayObj[names[i]][1]);
  daysObj[names[i]] = ddays;
  if (names[i].match(reg) !== null) {
    ddays = d_day(ddayObj[names[i]][1], ddayObj[names[i]][2]);
    daysObj[names[i]] = ddays;
    daysArray.push(ddays);
    lastYear = currentYear - ddayObj[names[i]][0];
    if (ddays > lastDays) {
      texts[i] += ` ${lastYear + 1}주년`;
    } else {
      texts[i] += ` ${lastYear}주년`;
    }
    document.querySelector(`.${names[i]}`).innerHTML = `${texts[i]} : D-${ddays}`;
  }  else if (ddays == 365 || ddays == 366) {
    daysArray.push(ddays);
    ddays = "D-Day";
    document.querySelector(`.${names[i]}`).innerHTML = `${texts[i]} : ${ddays}`;
  } else if (names[i].match(reg2) == null) {
    daysArray.push(ddays);
    ddays = `D-${ddays}`;
    document.querySelector(`.${names[i]}`).innerHTML = `${texts[i]} : ${ddays}`;
  } else {
    daysArray.push(ddays);
    document.querySelector(`.${names[i]}`).innerHTML = `${texts[i]} : D-${ddays}`;
    document.querySelector(`.${names[i]}`).classList.add('birthday');
  }
}

let sort = daysArray.sort((a, b) => a - b);
let name;
// order 사용한 정렬, D-Day라면 -1로 맨 앞으로 오게 함
for (let i = 0; i < names.length; i++) {
  name = getKeyByValue(daysObj, daysArray[i]);
  if (daysObj[name] == 365 || daysObj[name] == 366) {
    document.querySelector(`.${name}`).setAttribute('style', `order : -1;`);
  } else {
    document.querySelector(`.${name}`).setAttribute('style', `order : ${i};`);
  }
}