let values = [];
let w = 10;
let h;
let i = 1
let sorting = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(windowWidth);
  let increment = windowHeight / windowWidth;
  for (let i = 0; i < values.length; i++) {
    values[i] = i * increment;
  }
  shuffleArray(values);
}

function draw() {
  background(0);

  if (i < values.length) {
    let key = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] > key) {
      values[j + 1] = values[j];
      j--;
    }
    values[j + 1] = key;
    i++;
  }

  for (let i = 0; i < values.length; i++) {
    noStroke();
    fill(255);
    let x = i;
    let y = height - values[i];
    rect(x, y, 1, values[i]);
  }
}

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}


const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
