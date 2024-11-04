type statusProps = {
  status: "loading" | "success" | "error";
};

export default function Status({ status }: statusProps) {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully";
  } else if (status === "error") {
    message = "Error fetching data";
  }
  return (
    <>
      <p>{message}</p>
    </>
  );
}
