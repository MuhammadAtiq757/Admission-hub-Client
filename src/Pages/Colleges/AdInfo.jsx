
import { useContext, useRef } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const AdInfo = () => {
    const {user} = useContext(AuthContext);
    const formRef = useRef(null); 

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        const birth = form.birth.value;
       

        const adding ={

            photo,
            name,
            email,
            subject,
            mobile,
            address,
            birth,
            userEmail:user.email

        }
        console.log(adding);
        
fetch('http://localhost:5000/addInfo',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'

    },
    body: JSON.stringify(adding)
})
.then(res => res.json())
.then(data =>{
console.log(data);
formRef.current.reset();
        })
    }




    return (
        <div className="card-body bg-gray-300">


<form onSubmit={handleBookService} ref={formRef}>

<div className="grid grid-cols-1 w-72 gap-6 w-2/3 mx-auto mt-6">

    
   
    <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Student Name" name="name"  className="input input-bordered" />
    </div>



    <div className="form-control">
        <label className="label">
            <span className="label-text">Subject</span>
        </label>
        <input type="text" placeholder="Subject Name" name="subject"  className="input input-bordered" />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Student Email</span>
        </label>
        <input type="email" placeholder="Student Email Address"  name="email" className="input input-bordered" />
    </div>




    <div className="form-control">
        <label className="label">
            <span className="label-text">Student Mobile</span>
        </label>
        <input type="number" name="mobile" placeholder="Student Mobile" className="input input-bordered" />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Present Address</span>
        </label>
        <input type="text" placeholder="Student Address"  name="address" className="input input-bordered" />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Date Of Birth</span>
        </label>
        <input type="date" name="birth" placeholder="Student Birth info" className="input input-bordered" />
    </div>



    <div className="form-control">
        <label className="label">
            <span className="label-text">Student Profile URL</span>
        </label>
        <input type="text" name="photo" className="input input-bordered" />
    </div>

</div>

<div className="form-control mt-6 w-2/3 mx-auto">

    <input type="submit" value="Submit" className="btn btn-block w-60 mx-auto" />
</div>
</form>  
</div>
        
    );
};

export default AdInfo;