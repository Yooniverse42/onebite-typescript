/*인터페이스*/

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "유닝",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);

// 타입과 비교해봄
type Animal = {
  name: string;
  age?: number;
  sayHalo(): void;
  sayHalo(a: number, b: number): void;
};
const animal: Animal = {
  name: "doggi",
  sayHalo: function () {
    console.log("Halo");
  },
};

animal.sayHalo();
animal.sayHalo(1, 2);
