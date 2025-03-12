/*Exclude<T, U>*/
// T에서 U를 제거하는 타입
type Exclude<T, U> = T extends U ? never : T;
// Exclude<string, boolean> | Exclude<boolean, boolean>
// string | never
// string

type A = Exclude<string | boolean, boolean>; // string

/*Extract<T, U>*/
// T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/*Return<T>*/
// 함수의 반환값 타입을 추출하는 타입
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
