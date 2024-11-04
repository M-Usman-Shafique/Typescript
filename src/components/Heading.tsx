type headingProps = {
  children: string;
};
export default function Heading(props: headingProps) {
  return (
    <>
      <h1>{props.children}</h1>
    </>
  );
}
