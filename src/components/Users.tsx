type userProps = {
  users: {
    first: string;
    last: string;
  }[];
};

export default function Users({ users }: userProps) {
  return (
    <>
      {users.map((user) => (
        <div key={user.first}>
          <h5>
            {user.first} {user.last}
          </h5>
        </div>
      ))}
    </>
  );
}
