/*인터페이스의 확장*/

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "doggi",
  age: 2,
  isBark: true,
};

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "개냥이",
  age: 1,
  isBark: true,
  isScratch: false,
};
