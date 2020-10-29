function d_day(month, day) {
  var currentTime = new Date();
  var yearOfTheEvent = currentTime.getFullYear();
  var eventDate = new Date( yearOfTheEvent, month - 1, day );
  // var isItBirthday = currentTime.getMonth() === month - 1 && currentTime.getDate() === day;
  var now = new Date();
  if ( now > eventDate ) {
    eventDate = new Date( yearOfTheEvent + 1, month - 1, day );
  } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
    eventDate = new Date( now.getFullYear(), month - 1, day );
  };
  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remainingTime = eventTime - currentTime;
  var seconds = Math.floor( remainingTime / 1000 );
  var minutes = Math.floor( seconds / 60 );
  var hours =  Math.floor( minutes / 60 );
  var days = Math.floor( hours / 24 );
  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  var day = days;
  var hour = hours;
  var minute = minutes;
  var second = seconds;
  var dday = days + 1;
  return dday;
}