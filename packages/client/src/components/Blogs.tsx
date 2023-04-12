import { trpc } from '../trpc';
export default function Blogs() {

  const blogs = trpc.getBlogs.useQuery();

  if (blogs?.data?.length === 0 || !blogs.data) return <div>Loading...</div>;

  return (
    <div className='blogs-wrapper'>
      {blogs.data.map(blog => {
        return <div className="blog-wrapper"> 
              <div className="blog-title">
                {blog.title}
              </div>
              <div className='blog-image'>
                  <img src={blog.mainImageURL}/> 
              </div>
              <div className='blog-description'>
                {blog.description}
              </div>
           </div>
      })}
    </div>
  );
}