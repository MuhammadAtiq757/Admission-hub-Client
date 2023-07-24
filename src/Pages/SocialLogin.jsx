
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import app from "../../firebase.config";

const auth = getAuth(app)

const SocialLogin = () => {
    const {signIn} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn =() =>{

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    
        .catch(error =>{
            console.log('error', error.message);
        })
    }

    return (
        <div>
            <div className="divider"></div>
           <div className="w-full text-center my-6">
           <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
           </div>
        </div>
    );
};

export default SocialLogin;