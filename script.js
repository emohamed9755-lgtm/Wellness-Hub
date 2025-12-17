// ===============================
// SELECT ELEMENTS
// ===============================
const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

const stepsInput = document.getElementById('stepsInput');
const addStepsBtn = document.getElementById('addSteps');
const stepsDisplay = document.getElementById('stepsDisplay');

const waterInput = document.getElementById('waterInput');
const addWaterBtn = document.getElementById('addWater');
const waterDisplay = document.getElementById('waterDisplay');

const sleepInput = document.getElementById('sleepInput');
const addSleepBtn = document.getElementById('addSleep');
const sleepDisplay = document.getElementById('sleepDisplay');

const moodSelect = document.getElementById('moodSelect');
const setMoodBtn = document.getElementById('setMood');
const moodDisplay = document.getElementById('moodDisplay');

const resetBtn = document.getElementById('resetBtn');

// ===============================
// LOAD DATA FROM localStorage
// ===============================
let steps = parseInt(localStorage.getItem('steps')) || 0;
let water = parseInt(localStorage.getItem('water')) || 0;
let sleep = parseFloat(localStorage.getItem('sleep')) || 0;
let mood = localStorage.getItem('mood') || "-";

// Update display on load
stepsDisplay.textContent = steps;
waterDisplay.textContent = water;
sleepDisplay.textContent = sleep;
moodDisplay.textContent = mood;

// ===============================
// ADD STEPS
// ===============================
addStepsBtn.addEventListener('click', () => {
    const value = parseInt(stepsInput.value);
    if (!value || value < 0) return;
    steps += value;
    stepsDisplay.textContent = steps;
    localStorage.setItem('steps', steps);
    stepsInput.value = '';
});

// ===============================
// ADD WATER
// ===============================
addWaterBtn.addEventListener('click', () => {
    const value = parseInt(waterInput.value);
    if (!value || value < 0) return;
    water += value;
    waterDisplay.textContent = water;
    localStorage.setItem('water', water);
    waterInput.value = '';
});

// ===============================
// ADD SLEEP
// ===============================
addSleepBtn.addEventListener('click', () => {
    const value = parseFloat(sleepInput.value);
    if (!value || value < 0) return;
    sleep += value;
    sleepDisplay.textContent = sleep;
    localStorage.setItem('sleep', sleep);
    sleepInput.value = '';
});

// ===============================
// SET MOOD
// ===============================
setMoodBtn.addEventListener('click', () => {
    const selectedMood = moodSelect.value;
    if (!selectedMood) return;
    mood = selectedMood;
    moodDisplay.textContent = mood;
    localStorage.setItem('mood', mood);
});

// ===============================
// RESET ALL DATA
// ===============================
resetBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all data?")) {
        steps = 0;
        water = 0;
        sleep = 0;
        mood = "-";

        stepsDisplay.textContent = steps;
        waterDisplay.textContent = water;
        sleepDisplay.textContent = sleep;
        moodDisplay.textContent = mood;

        localStorage.removeItem('steps');
        localStorage.removeItem('water');
        localStorage.removeItem('sleep');
        localStorage.removeItem('mood');
    }
});

// ===============================
// TOGGLE THEME
// ===============================
toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});