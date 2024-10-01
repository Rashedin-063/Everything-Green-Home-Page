import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='max-w-7xl mx-auto font-poppins bg-white'>
      <Navbar />
      <Banner />
     <Footer/>
    </div>
  );
}
export default App