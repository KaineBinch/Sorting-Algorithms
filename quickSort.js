let values = [];
let w = 10;
let h;
let sorting = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(windowWidth);
  let increment = windowHeight / windowWidth;
  for (let i = 0; i < values.length; i++) {
    values[i] = i * increment;
  }
  shuffleArray(values);
  startSorting();
}

async function startSorting() {
  sorting = true;
  await quickSort(values, 0, values.length - 1);
  sorting = false;
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function asyncSwap(arr, a, b) {
  await sleep()
  while (!sorting) {
    await sleep(300)
  }
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

async function partition(arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await asyncSwap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await asyncSwap(arr, pivotIndex, end);
  return pivotIndex;
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    noStroke();
    fill(255);
    let x = i;
    let y = height - values[i];
    rect(x, y, 1, values[i]);
  }
}

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}