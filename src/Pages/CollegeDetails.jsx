import { useLoaderData } from "react-router-dom";


const CollegeDetails = () => {
    const details = useLoaderData();
const { name, image, admissionProcess, eventsDetails, researchWorks, } = details
console.log(details);

    return (
        <div className="p-12">
<div className="card lg:card-side bg-violet-200 shadow-xl">
  <figure><img className="w-96 pl-6"  src={image} alt="Album"/></figure>
  <div className="w-[60%] p-6">
    <h2 className=""> <span className="font-semibold">College Name:  </span> {name}</h2>
    <h2 className="mt-2"> <span className="font-semibold">Admission Process: </span> {admissionProcess}</h2>
    <h2 className="mt-2"> <span className="font-semibold">Events Details:</span>{eventsDetails}</h2>
    <h2 className="mt-2"><span className="font-semibold">Research Works:</span>{researchWorks}</h2>
    
  </div>
</div>


        </div>
    );
};

export default CollegeDetails;