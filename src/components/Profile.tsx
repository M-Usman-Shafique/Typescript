import { bioProps } from "../types/types";

export default function Profile({ age, gender, job }: bioProps) {
  return (
    <>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Job: {job}</p>
    </>
  );
}
