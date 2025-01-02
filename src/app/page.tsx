import Hoome from '@/components/Home'
import Blogs from './blogs-items/page';
export default function Home() {
  return (
    <div>
      <Hoome/>
      <Blogs url={"*[_type == 'post']"}/>
    </div>
  );
}
