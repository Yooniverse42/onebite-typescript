/*접근 제어자(access modifier)*/
// public private proteced

class Employee {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log("workwork");
  }
}

const employee = new Employee("yoon", 20, "dev");
console.log(employee);
