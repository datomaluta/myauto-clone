import BottomHeader from "../header/bottomHeader/BottomHeader";
import MobileBottomHeader from "../header/bottomHeader/MobileBottomHeader";
import Header from "../header/header/Header";
import Menubar from "../header/menubar/Menubar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <BottomHeader />
      {children}
      <MobileBottomHeader />
      <Menubar />
    </div>
  );
};

export default DefaultLayout;
