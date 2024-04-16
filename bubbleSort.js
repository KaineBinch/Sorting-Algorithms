let w, h;
let values = [];
let i = 0;
let j = 0;
let sorting = true;

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  values = new Array(width);
  let increment = h / width;
  for (let i = 0; i < values.length; i++) {
    values[i] = i * increment;
  }
  shuffleArray(values);
}

function draw() {
  background(0);

  if (sorting && i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        swap(values, j, j + 1);
      }
    }
    i++;
  } else {
    console.log("Finished");
    noLoop();
  }

  for (let i = 0; i < values.length; i++) {
    noStroke();
    fill(255);
    let x = i;
    let y = height - values[i];
    rect(x, y, 1, values[i]);
  }
}

const swap = (arr, a, b) => {
  let val = arr[a];
  arr[a] = arr[b];
  arr[b] = val;
};

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
