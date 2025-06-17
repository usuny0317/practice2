import "./App.css";
import ImgFix from "./pages/img-fix";
import ImgFix2 from "./pages/img-fix2";
import Swipe from "./pages/swipe";
import Swipe2 from "./pages/swiper2";
import Swipe3 from "./pages/swiper3";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Swipe3 />
      <ImgFix />
      <ImgFix2 />
      <Swipe />
      <Swipe2 />
    </div>
  );
}

export default App;
