import React from 'react';

const CollegeData = ({ collegeData }) => {
 const [name, events] = collegeData

  return (
    <div className="college-card">
      {/* <img src={collegeData.image} alt="College" className="college-image" /> */}
      <h2 className="college-name">{name}</h2>
      <p className="admission-dates">Admission Dates: {collegeData.admissionDates}</p>
      <p className="events">Events: {events}</p>
      <p className="research-history">Research History: {collegeData.researchHistory}</p>
      <p className="sports">Sports: {collegeData.sports}</p>
    </div>
  );
};

export default CollegeData;
