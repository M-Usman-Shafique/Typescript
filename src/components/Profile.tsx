type infoProps = {
  info: {
    age: number;
    gender: string;
    job: string;
  };
};

export default function Profile(props: infoProps) {
  return (
    <>
      <p>Age: {props.info.age}</p>
      <p>Gender: {props.info.gender}</p>
      <p>Job: {props.info.job}</p>
    </>
  );
}
