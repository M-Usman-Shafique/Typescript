export type bioProps = {
  bio: {
    age: number;
    gender: string;
    job: string;
  };
};

// Type inheritence:
export type infoProps = {
    skill: string,
    info: bioProps,

  };