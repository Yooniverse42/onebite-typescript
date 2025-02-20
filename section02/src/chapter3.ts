let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "곽두팔",
};

user.id;

let config: {
  readonly apiKey: string;
} = { apiKey: "MY API KEY" };

// config.apiKey = "hacked";
