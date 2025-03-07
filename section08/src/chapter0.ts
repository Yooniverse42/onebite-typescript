/*인덱드 엑세스 타입*/

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo1(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

function printAuthorId1(id: Post["author"]["id"]) {
  console.log(id);
}

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

function printAuthorId2(id: PostList[number]["author"]["id"]) {
  console.log(id);
}

const post1: Post = {
  title: "안녕하세요",
  content: "다들 열심히 해보아요",
  author: {
    id: 1,
    name: "yoon",
  },
};

const post2: PostList[0] = {
  title: "안녕하세요",
  content: "다들 열심히 해보아요",
  author: {
    id: 1,
    name: "yoon",
  },
};

// 튜플에서 사용하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
