import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCollege = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`  https://admisson-hub-server.vercel.app/collegeData`)
      .then(res => res.json())
      .then(data => setInfo(data));
  }, []);

  // Extract the first three elements from the info array


  return (
    <div className="college-section mb-4 gap-6 p-8 m-8">
      {info.map((collegeData) => (
        <div key={collegeData.name} className="card lg:card-side bg-base-100 shadow-xl m-6 p-6">
          <figure>
            <img className='mb-6 rounded-lg w-96 p-6' src={collegeData.image} alt={collegeData.name} />
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
  );
};

export default AllCollege;
