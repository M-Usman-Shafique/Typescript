export default function Event() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <label htmlFor="txt">Enter: </label>
      <input type="text" id="txt" onChange={handleChange} />
    </>
  );
}
