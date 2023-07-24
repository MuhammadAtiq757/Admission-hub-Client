

import { Link } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const [some, setSome] = useState('')
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
       event.preventDefault();

       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       const photo = form.photo.value
       console.log(name, email, password, photo);
   
       createUser(email, password)
      .then(result =>{
       const loggedUser = result.user;
       console.log(loggedUser);
       updateUserProfile (result.user, name, photo)
      })

      .catch(error =>{ console.log(error)
      setSome(error.message)
    })

    const updateUserProfile = (user, name, photo)=>{
        updateProfile(user, {
            displayName: name,
            photoURL : photo

        })
        .then(result =>{

            const updateUser = result.user;
            console.log(updateUser);
            setSome('')
        })
        .catch(error =>{
            error.message(error)
            setSome('')
        })
    }
   
   }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="w-1/2 mr-12">
                    {/* <img src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter your photo URL" className="input input-bordered" />
                        </div>
                        <div className='form-control mt-6'>

                            <input className=" btn   bg-blue-500" type="submit" value="Sign Up" />
                        </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account ? <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;