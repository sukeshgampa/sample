import Link from "next/link";

export async function getStaticProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  console.log('static posts>>>>', users)
  return {
    props: {
      users,
    },
  };
}

function Ninja({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <a>
              <h1>{user.id}. {user.name}</h1>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
export default Ninja;
