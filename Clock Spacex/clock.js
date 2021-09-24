var clock;

function changeTimezone(timeZone) {
  clearInterval(clock);
  updateClock(timeZone);
  document.querySelector("[data-title]").innerHTML = timeZone;

  clock = setInterval(() => {
    updateClock(timeZone);
  }, 1000);
}

function updateClock(timeZone) {
  var date = new Date(
    new Date().toLocaleString("en-US", {
      timeZone,
    })
  );

  if (betweenHours(date, 0, 5)) {
    switchTheme("midnight");
  } else if (betweenHours(date, 6, 11)) {
    switchTheme("dawn");
  } else if (betweenHours(date, 12, 17)) {
    switchTheme("midday");
  } else if (betweenHours(date, 18, 23)) {
    switchTheme("dusk");
  }

  document.querySelector("[data-time]").innerHTML = date.toLocaleTimeString("nl-NL");
}

// Switch between day parts// 

function betweenHours(dateObject, startHour, endHour) {
  if (dateObject.getHours() >= startHour && dateObject.getHours() <= endHour) {
    return true;
  }

  return false;
}

function switchTheme(themeName) {
  document.body.className = themeName;
  document.querySelector("[data-period]").innerHTML = themeName;
}

changeTimezone("America/Fortaleza");
