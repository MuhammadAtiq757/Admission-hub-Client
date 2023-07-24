import React from "react";
import img1 from '../assets/image/img-1.jpg';
import img2 from '../assets/image/img-2.jpg';
import img3 from '../assets/image/img-3.jpg';
import img4 from '../assets/image/img-4.jpg';
import img5 from '../assets/image/img-5.jpg';
import img6 from '../assets/image/img-6.jpg';
// import './Gallary.css'; // Import the CSS file
import './Gallary.css'; // Import the CSS file

const Gallary = () => {
  return (
   <div>
    <h2 className="text-center text-3xl font-semibold mt-4  border-w">Photo Gallary</h2>
     <div className='grid md:grid-cols-3 gap-4 p-6'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img1} alt="Shoes" className='p-4 m-4 w-full h-80 hover-effect' />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img2} alt="Shoes" className='p-4 m-4 w-full h-80 hover-effect' />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img3} alt="Shoes" className='p-4 m-4 w-full h-80 hover-effect' />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img4} alt="Shoes" className='p-4 m-4 w-full h-80 hover-effect' />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img5} alt="Shoes" className='p-4 m-4 w-full h-80 hover-effect' />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img6} alt="Shoes" className='p-4 m-4 w-full h-80 hover-effect' />
        </figure>
      </div>
    </div>
   </div>
  );
};

export default Gallary;
