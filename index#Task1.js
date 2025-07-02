const planner = document.getElementById("planner");
const submitBtn = document.getElementById("submitBtn");
const startHour = 9;
const endHour = 17;

function createPlanner() {
  for (let hour = startHour; hour <= endHour; hour++) {
    const row = document.createElement("div");
    row.className = "time-block";

    const hourLabel = document.createElement("div");
    hourLabel.className = "hour";
    hourLabel.textContent = formatHour(hour);

    const textarea = document.createElement("textarea");
    textarea.id = hour-${hour};
    textarea.value = localStorage.getItem(hour-${hour}) || "";

    const saveBtn = document.createElement("button");
    saveBtn.className = "saveBtn";
    saveBtn.textContent = "Save";
    saveBtn.onclick = () => {
      localStorage.setItem(hour-${hour}, textarea.value);
      alert("Task saved for " + formatHour(hour));
    };

    row.appendChild(hourLabel);
    row.appendChild(textarea);
    row.appendChild(saveBtn);
    planner.appendChild(row);
  }
}

function formatHour(hour) {
  return hour >= 12 ? ${hour > 12 ? hour - 12 : 12} PM : ${hour} AM;
}

submitBtn.onclick = () => {
  window.location.href = "output.html";
};

createPlanner();