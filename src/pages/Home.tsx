import Header from "../components/header/Header";
import BottomHeader from "../components/header/bottomHeader/BottomHeader";
import MobileBottomHeader from "../components/header/bottomHeader/MobileBottomHeader";
import Menubar from "../components/header/menubar/Menubar";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <BottomHeader />
      <MobileBottomHeader />
      <Menubar />
    </div>
  );
};

export default Home;
