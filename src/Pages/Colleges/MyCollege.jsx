import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyCollege = () => {
   
    
    const {user} = useContext(AuthContext);
    const [info, setInfo] = useState([])
  
  
    
 useEffect(() =>{
    fetch(`https://admisson-hub-server.vercel.app/myInfo/${user?.email}`)
    .then(res => res.json())
    .then(data => setInfo(data))
 }, [])
console.log(info);
    return (
        <div className="college-section mb-4 gap-6 p-8 m-8">
        {info.map((collegeInfo) => (
          
<>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={collegeInfo.photo} alt="Shoes" className="rounded-full w-32 border h-32 border-violet-400 mb-2" />
  </figure>
  <hr />
  <div className="card-body mt-2">
    <h2 className="card-title">Name: {collegeInfo.name}</h2>
    <h2 className="card-title">Subject: {collegeInfo.subject}</h2>
    <h2 className="card-title">Address: {collegeInfo.address}</h2>
    <h2 className="card-title">Email: {collegeInfo.email}</h2>
    <h2 className="card-title">Date of Birth: {collegeInfo.birth}</h2>
    <h2 className="card-title">Mobile: {collegeInfo.mobile}</h2>
    
   
  </div>
</div>
</>


          
        ))}
      </div>
    );
};

export default MyCollege;