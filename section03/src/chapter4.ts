/*타입 추론*/

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "yooni",
  profile: {
    nickname: "yooooon",
  },
  urls: ["https://yooniverse42.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

const arr = [1, "hello"];
