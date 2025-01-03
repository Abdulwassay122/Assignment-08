import Hoome from '@/components/Home'
import Blogs from './blogs/page';
import Comments from '@/components/Comments';
export default function Home() {
  return (
    <div>
      <Hoome/>
      <Comments/>
      <Blogs/>
    </div>
  );
}
