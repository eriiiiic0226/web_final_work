
// 網頁載入時執行的函式
window.onload = function() {
  var eventTable = document.getElementById('event-table');

  // 在表格中顯示活動資訊
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    var newRow = eventTable.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var dateCell = newRow.insertCell(1);
    var timeCell = newRow.insertCell(2);

    nameCell.innerText = event.name;
    dateCell.innerText = formatEventDate(event.date);
    timeCell.innerText = formatEventTime(event.time);
  }
}

function addEvent() {
  var eventNameInput = document.getElementById('event-name');
  var eventDateInput = document.getElementById('event-date');
  var eventTimeInput = document.getElementById('event-time');

  var eventName = eventNameInput.value;
  var eventDate = eventDateInput.value;
  var eventTime = eventTimeInput.value;

  if (eventName && eventDate && eventTime) {
    var eventTable = document.getElementById('event-table');

    var newRow = eventTable.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var dateCell = newRow.insertCell(1);
    var timeCell = newRow.insertCell(2);

    nameCell.innerText = eventName;
    dateCell.innerText = formatEventDate(eventDate);
    timeCell.innerText = formatEventTime(eventTime);

    eventNameInput.value = '';
    eventDateInput.value = '';
    eventTimeInput.value = '';
  }
}
  
  function formatEventDate(eventDate) {
    var date = new Date(eventDate);
    var formattedDate = date.toLocaleDateString('zh-TW');
    return formattedDate;
  }
  
  function formatEventTime(eventTime) {
    var timeParts = eventTime.split(':');
    var hour = timeParts[0];
    var minute = timeParts[1];
    var formattedTime = hour + ':' + minute;
    return formattedTime;
  }