function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateDisplay = document.getElementById("date");
  const timeString = new Date().toLocaleTimeString('en-GB');
  const dateString = new Date().toLocaleDateString('en-GB');
  // const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = timeString;
  dateDisplay.textContent = dateString;
}
setInterval(refreshTime, 100);
