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

class StudentDev extends Student {
  // 필드
  skill;

  // 생성자
  constructor(name, grade, age, skill) {
    super(name, grade, age);
    this.skill = skill;
  }

  // 메서드
  favoritSkill() {
    console.log(`${this.skill}을 제일 좋아해`);
  }
}

// 클래스를 이용해서 만든 객체 = 인스턴스
let studentB = new Student("이정환", "A+", 20);
console.log(studentB);
studentB.study();
studentB.introduce();

let studentC = new StudentDev("yoon", "A", 20, "typescript");
console.log(studentC);
studentC.favoritSkill();
