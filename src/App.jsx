import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './Home';

const App = () => {
  return (
    <div className=' mx-auto font-poppins bg-white'>
      <Navbar />
      <Banner />
      <Home/>
     <Footer/>
    </div>
  );
}
export default App