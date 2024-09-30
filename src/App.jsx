import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='max-w-7xl mx-auto font-poppins'>
      <Navbar />
      <Banner/>
    </div>
  );
}
export default App