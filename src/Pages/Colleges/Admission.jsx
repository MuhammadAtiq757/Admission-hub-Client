import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Admission = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
      fetch(` https://admisson-hub-server.vercel.app/collegeData`)
        .then(res => res.json())
        .then(data => setInfo(data));
    }, []);


    return (
        <div className="grid md:grid-cols-3 p-6 m-6 gap-4">
            
            {info.map((collegeData) => (
       

<>
<div className="card card-compact w-96 bg-base-100 shadow-xl w-72">
  <figure><img src={collegeData.image} alt="Shoes" className="h-80 w-full"
  
  /></figure>
  <div className="card-body">
    <Link to={`/information/${collegeData._id}`}>
    <h2 className="text-2xl font-semibold text-center">{collegeData.name}</h2>
              </Link>
  </div>
</div>
</>

      ))}


        </div>
    );
};

export default Admission;