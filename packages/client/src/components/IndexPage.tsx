import { trpc } from '../trpc';
export default function IndexPage() {
    console.log('IndexPage')
  const user = trpc.getBlogs.useQuery();
  console.log('user :', user.data);
  if (!user.data) return <div>Loading...</div>;
  return (
    <div>
      {/* <p>{user.data.id}</p>
      <p>{user.data.name}</p> */}
    </div>
  );
}