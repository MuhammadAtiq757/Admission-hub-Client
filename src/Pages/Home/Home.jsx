import Search from '../Search';
import CollegeData from '../Colleges/CollegeData';
import Colleges from '../Colleges/Colleges';
import Gallary from '../Gallary';

const Home = () => {
    return (
        <div className="">
          {/* <Search></Search>   */}
          {/* <CollegeData></CollegeData> */}
          <Colleges></Colleges>
          <Gallary></Gallary>
          
        </div>
    );
};

export default Home;