import { trpc } from '../trpc';
export default function IndexPage() {
  console.log('IndexPage')
  const blogs = trpc.getBlogs.useQuery();
  console.log('blogs :', blogs?.data?.[0]);

  if (blogs?.data?.length === 0 || !blogs.data) return <div>Loading...</div>;

  return (
    <div>
      {/* <p>{user.data.ID}</p>
      <p>{user.data.description}</p> */}
    </div>
  );
}