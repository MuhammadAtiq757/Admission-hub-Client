import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Colleges = () => {
  const [find, setFind] = useState('')
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(` https://admisson-hub-server.vercel.app/collegeData`)
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  const handleFind = ()=>{
    fetch(` https://admisson-hub-server.vercel.app/findName/${find}`)
    .then(res => res.json())
    .then (data => setInfo(data))

  }


  // Extract the first three elements from the info array
  const displayedColleges = info.slice(0, 3);

  return (
   <div>

<div className="form-control">
  <div className="input-group ">
   <div className="mx-auto  items-center m-6">
   <input onChange={e => setFind(e.target.value)} type="text" placeholder="Find Your College" className="input input-bordered" />
    <button onClick={handleFind} className=" ml-2 btn btn-active">Search</button>
   </div>
  </div>
</div>        


    
    <h2 className='text-center text-3xl font-semibold mt-8'>Popular College</h2>
     <div className="college-section mb-4 gap-6 p-6 m-6">
      {displayedColleges.map((collegeData) => (
        <div key={collegeData.name} className="card lg:card-side bg-base-100 shadow-xl p-6 m-6">
          <figure>
            <img className=' w-96 mb-6 p-6' src={collegeData.image} alt={collegeData.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">College Name: {collegeData.name}</h2>
            <p>Admission Date: {collegeData.admissionDates}</p>
            <p>Events: {collegeData.events}</p>
            <p>Research History: {collegeData.researchHistory}</p>
            <p>Sports: {collegeData.sports}</p>
            <div className="card-actions justify-end">
              <Link to={`/collegeDetails/${collegeData._id}`}>
                <button className="btn bg-violet-600 text-white">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Colleges;
