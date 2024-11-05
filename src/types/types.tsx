export type greetProps = {
  name: string;
  msgs?: number;
  isLogin: boolean;
};

export type bioProps = {
    age: number;
    gender: string;
    job: string;
};

// Type inheritence:
// export type infoProps = {
//   skill: string;
//   info: bioProps;
// };

// const userInfo: infoProps = {
//   skill: "JavaScript",
//   info: {
//       age: 30,
//       gender: "male",
//       job: "developer",
//   },
// };

// Type composition
export type infoProps = {
  skill: string;
} & bioProps;

const userInfo: infoProps = {
  skill: "JavaScript",
  age: 30,
  gender: "male",
  job: "developer",
};
