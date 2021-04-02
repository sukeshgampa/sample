import Link from "next/link";
import {useRouter} from 'next/router'
export async function getStaticPaths(context) {
  console.log("===>", context);
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  const paths = users.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  })
  .filter(obj=>obj['params']['id']==1);
  console.log("paths", paths);
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  console.log(context.params.id);
  let res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + context.params.id
  );
  let users = await res.json();
  console.log("res", users);
  let data;
  // if (!data) {
  //   return {
  //     redirect: { destination: "/users", permanant: false },
  //   };
  // }
  return {
    props: {
      users,
    },
  };
}

const singleUser = (props) => {
  const router = useRouter();
  if(router.fallback){
    console.log('this is for waiting')
    return(
      <div>
        <h1>loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <Link href={"/users"}>
        <h3>back</h3>
      </Link>

      <h1>user id -{props.users.id} </h1>
      <h1>user name - {props.users.name}</h1>
    </div>
  );
};

export default singleUser;
