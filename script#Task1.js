const plannerContainer = document.getElementById('planner');
const submitBtn = document.getElementById('submitBtn');

const hours = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM'
];

function createPlanner() {
  const currentHour = new Date().getHours();
  hours.forEach((hour, index) => {
    const timeBlock = document.createElement('div');
    timeBlock.classList.add('time-block');
    const timeLabel = document.createElement('span');
    timeLabel.textContent = hour;
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add task...';
    const button = document.createElement('button');
    button.textContent = 'Save';
    button.onclick = () => saveTask(index, input.value);
    timeBlock.appendChild(timeLabel);
    timeBlock.appendChild(input);
    timeBlock.appendChild(button);

    // Color-code time blocks
    if (index < currentHour - 7) {
      timeBlock.style.backgroundColor = '#d3d3d3'; // Past
    } else if (index === currentHour - 7) {
      timeBlock.style.backgroundColor = '#ff6347'; // Present
    } else {
      timeBlock.style.backgroundColor = '#98fb98'; // Future
    }

    plannerContainer.appendChild(timeBlock);
  });
}

function saveTask(index, task) {
  localStorage.setItem(`task-${index}`, task);
}

function loadTasks() {
  hours.forEach((_, index) => {
    const task = localStorage.getItem(`task-${index}`);
    if (task) {
      const input = plannerContainer.children[index].children[1];
      input.value = task;
    }
  });
}

submitBtn.addEventListener('click', () => {
  hours.forEach((_, index) => {
    const input = plannerContainer.children[index].children[1];
    saveTask(index, input.value);
  });
});

createPlanner();
loadTasks();
