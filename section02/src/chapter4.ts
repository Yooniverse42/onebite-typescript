type User = {
  id?: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "곽두팔",
  nickname: "dodo",
  birth: "1997.01.01",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "김꽉꽉",
  nickname: "dodo",
  birth: "1997.01.01",
  bio: "안녕하세요",
  location: "서울",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
