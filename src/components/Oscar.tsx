type oscarProps = {
  children: React.ReactNode;
};
export default function Oscar({ children }: oscarProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
