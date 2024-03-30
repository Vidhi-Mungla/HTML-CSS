  // Skill Card 1
  let progressBar1 = document.querySelector("#progress-bar-1"),
  progressValue1 = document.querySelector("#progress-value-1");
let progressStartValue1 = 0,
  progressEndValue1 = 85,
  speed1 = 15;

let progress1 = setInterval(() => {
  progressStartValue1++;

  progressValue1.textContent = `${progressStartValue1}%`;
  progressBar1.style.background = `conic-gradient(#B19777 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue1 == progressEndValue1) {
      clearInterval(progress1);
  }
}, speed1);

// Skill Card 2
let progressBar2 = document.querySelector("#progress-bar-2"),
  progressValue2 = document.querySelector("#progress-value-2");
let progressStartValue2 = 0,
  progressEndValue2 = 79,
  speed2 = 15;

let progress2 = setInterval(() => {
  progressStartValue2++;

  progressValue2.textContent = `${progressStartValue2}%`;
  progressBar2.style.background = `conic-gradient(#B19777 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue2 == progressEndValue2) {
      clearInterval(progress2);
  }
}, speed2);

// Skill Card 3
let progressBar3 = document.querySelector("#progress-bar-3"),
  progressValue3 = document.querySelector("#progress-value-3");
let progressStartValue3 = 0,
  progressEndValue3 = 68,
  speed3 = 15;

let progress3 = setInterval(() => {
  progressStartValue3++;

  progressValue3.textContent = `${progressStartValue3}%`;
  progressBar3.style.background = `conic-gradient(#B19777 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue3 == progressEndValue3) {
      clearInterval(progress3);
  }
}, speed3);

// Skill Card 4
let progressBar4 = document.querySelector("#progress-bar-4"),
  progressValue4 = document.querySelector("#progress-value-4");
let progressStartValue4 = 0,
  progressEndValue4 = 86,
  speed4 = 15;

let progress4 = setInterval(() => {
  progressStartValue4++;

  progressValue4.textContent = `${progressStartValue4}%`;
  progressBar4.style.background = `conic-gradient(#B19777 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`;

  if (progressStartValue4 == progressEndValue4) {
      clearInterval(progress4);
  }
}, speed4);

