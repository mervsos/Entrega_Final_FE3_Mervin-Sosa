
import { Outlet } from "react-router-dom";
import Footer from "./Components/common/Footer/Footer";
import Navbar from "./Components/common/Navbar/Navbar";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
