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
        <div>
          <h5>
            {user.first} {user.last}
          </h5>
        </div>
      ))}
    </>
  );
}
