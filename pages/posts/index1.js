import { useRouter } from 'next/router'

const posts = () => {
    const router = useRouter()
  const { pid } = router.query
    return (  <div>
        <h1>this is post component</h1>
    </div>);
}
 
export default posts;