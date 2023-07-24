

const researchPapers = [
  {
    "title": "The Daily Chronicle",
    "author": "John Doe",
    "link": "https://chronline.com/",
    "description": "This is the first research paper description."
  },
  {
    "title": "The Global Times",
    "author": "Jane Smith",
    "link": "https://www.globaltimes.cn/",
    "description": "This is the second research paper description."
  },
  {
    "title": "The Metro Herald",
    "author": "David Johnson",
    "link": "https://www.metroherald.com/",
    "description": "This is the third research paper description."
  }
];

const Paper = () => {
  return (
    <section>
      <h2 className="text-3xl text-center font-semibold m-6">Research Papers</h2>
     <div className="grid md:grid-cols-3 gap-4">
     {researchPapers.map((paper, index) => (
          <>
          
          <div className="text-xl card mb-6 w-96 bg-slate-400 placeholder:text-neutral-content">
     <div className="card-body items-center text-center">
       <h2 className="card-title">{paper.title}</h2>
       <p>Author: {paper.author}</p>
       <p>Description: {paper.description}</p>
   <p className="card-title">  Link:  <a href={paper.link} target="_blank" rel="noopener noreferrer">
      Paper Link
     </a></p>
       
     </div>
   </div>
          </>





        ))}

     </div>
    </section>
  );
};

export default Paper;
