import { useRouter } from "next/router";

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      first: "first post",
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: ['1','2'] } }],
    fallback: true,
  };
}

const common = (props) => {
  const router = useRouter();
  const params = router.query;
  console.log(">>>>", params);
  return (
    <div>
      <h1>this is common component :: {props.first}</h1>
    </div>
  );
};

export default common;
