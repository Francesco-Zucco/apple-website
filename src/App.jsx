import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const styles = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    heading: {
      fontSize: "2.5em",
      fontWeight: "600",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.25em",
      fontWeight: "400",
      color: "#666",
    },
  };

  return (
    <div
      className="bg-[#161617] max-w-[2560px] flex flex-col "
      style={styles.container}
    >
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
