type headingProps = {
  children: string;
};

export default function Heading({ children }: headingProps) {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}
