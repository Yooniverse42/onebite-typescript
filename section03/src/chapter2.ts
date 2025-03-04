/*기본 타입간의 호환성*/

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/*객체 타입간의 호환성*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
};

// let dog2: Dog = {
//   name: "댕댕이",
//   color: "white",
//   bread: "시츄",
// }

animal = dog;
// dog = animal

let dog2: Animal = dog;

function func(dog: Animal) {}

func({
  name: "댕댕이",
  color: "white",
  //   bread: "시츄",
});

func(dog);
