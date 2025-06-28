import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  useGSAP(()=>{

  },[])
  return (
    <div className= 'flex-center h-[100vh]'>
      <p className='text-3xl'>HELLO I AM COCKTAIL</p>
    </div>
  );
};
export default App;