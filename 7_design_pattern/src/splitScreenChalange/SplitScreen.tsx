import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SplitScreens from "./components/SplitScreens";

const SplitScreen = () => {
  return (
    <main>
      <Header />
      <SplitScreens leftWeight={15} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreens>
      <Footer />
    </main>
  );
};

export default SplitScreen;
