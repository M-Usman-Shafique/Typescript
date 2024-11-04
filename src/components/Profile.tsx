import { infoProps } from "../types/types";

export default function Profile({ info: { age, gender, job } }: infoProps) {
  return (
    <>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Job: {job}</p>
    </>
  );
}
