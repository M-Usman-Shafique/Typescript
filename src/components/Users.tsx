type userProps = {
  users: {
    first: string;
    last: string;
  }[];
};

export default function Users(props: userProps) {
  return (
    <>
      {props.users.map((user) => (
        <div key={user.first}>
          <h5>
            {user.first} {user.last}
          </h5>
        </div>
      ))}
    </>
  );
}
