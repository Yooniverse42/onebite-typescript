/*함수 타입 표현식*/

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};
const add2: Operation2 = (a, b) => a + b;

add2(1, 2);
add2.name;
