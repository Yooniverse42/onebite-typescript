/*함수 타입 정의*/

function func(a: number, b: number) {
  return a + b;
}

const add = (a: number, b: number) => a + b;

/*함수의 매개변수*/

function introduce(name = "mango", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("yooon");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((i) => (sum += i));

  return sum;
}

getSum(1, 2, 3);
