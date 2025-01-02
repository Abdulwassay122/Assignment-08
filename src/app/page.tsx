import Hoome from '@/components/Home'
// import BlogItems from '@/components/BlogItems';
import Testing from '@/components/Testing';
import Blogs from './blogs-items/page';
export default function Home() {
  return (
    <div>
      <Hoome/>
      <Blogs url={`*[_type == 'post']`}/>
      {/* <BlogItems/> */}
      {/* <Testing/> */}
    </div>
  );
}
