/*타입스크립트의 클래스*/
const employee = {
  name: "yoon",
  age: 20,
  position: "developer",
  work() {
    console.log("workwork");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("workwork");
  }
}

const employeeB = new Employee("yuun", 29, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "뫄뫄",
  age: 0,
  position: "",
  work() {},
};
console.log(employeeC);
