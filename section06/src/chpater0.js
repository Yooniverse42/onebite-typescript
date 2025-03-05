/*자바스크립트의 클래스*/
let studentA = {
  name: "yoon",
  grade: "A+",
  age: 20,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log("안녕하세요!");
  }
}

// 클래스를 이용해서 만든 객체 = 인스턴스
let studentB = new Student("이정환", "A+", 20);
console.log(studentB);
studentB.study();
studentB.introduce();
