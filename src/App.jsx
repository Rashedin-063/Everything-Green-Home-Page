import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='max-w-7xl mx-auto font-poppins'>
      <Navbar />
      <Banner />
      <div className="bg-green-300 h-40 mt-8">

      </div>
    </div>
  );
}
export default App