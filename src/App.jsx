import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-5xl text-blue-600">Welcome to Mojito</h1>
    </div>
  );
};

export default App;
