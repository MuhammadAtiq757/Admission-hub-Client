import Search from '../Search';
import CollegeData from '../Colleges/CollegeData';
import Colleges from '../Colleges/Colleges';
import Gallary from '../Gallary';
import Paper from '../Paper';

const Home = () => {
    return (
        <div className="">
          {/* <Search></Search>   */}
          {/* <CollegeData></CollegeData> */}
          <Colleges></Colleges>
          <Gallary></Gallary>
          <Paper></Paper>
          
        </div>
    );
};

export default Home;