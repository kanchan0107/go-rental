import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/body";

const App=()=>{
  return(
   <>
   <Header/>
   <Body/>
    <Outlet/>
   <Footer/>
   </>
  );
}
export default App;