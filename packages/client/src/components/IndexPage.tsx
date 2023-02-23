import { trpc } from '../trpc';
export default function IndexPage() {
    console.log('IndexPage')
  const user = trpc.getBlogs.useQuery('1234');
  console.log('user :', user);
  if (!user.data) return <div>Loading...</div>;
  return (
    <div>
      <p>{user.data.id}</p>
      <p>{user.data.name}</p>
    </div>
  );
}