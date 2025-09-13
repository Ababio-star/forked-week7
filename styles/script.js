// Part 2: JavaScript Functions demonstrating scope, parameters, and return values

let globalCount = 0;  // global scope variable

// Function increments local and global counters, returns both
function incrementCounters(localCount) {
  localCount++;
  globalCount++;
  return { localCount, globalCount };
}

// Store local count in closure to demonstrate local scope
const counterBtn = document.getElementById('countBtn');
const output = document.getElementById('counterOutput');

let localCount = 0;

counterBtn.addEventListener('click', () => {
  const counts = incrementCounters(localCount);
  localCount = counts.localCount;
  output.textContent = `Local Count: ${counts.localCount}, Global Count: ${counts.globalCount}`;
});

// Part 3: Trigger CSS Animation using JavaScript

const animBox = document.getElementById('animBox');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  animBox.classList.toggle('animate');
});