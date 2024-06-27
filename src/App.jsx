import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#161617] max-w-[2560px] flex flex-col ">
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
