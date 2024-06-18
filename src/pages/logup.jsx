import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";

export const Logup = ()=> {

    const Navigation = useNavigate();

    const [users, setUsers] = useState({
        email: '',
        password: '',
        username: '',
        photourl: '',
      })

    const hendlesubmit = (e)=> {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, users.email, users.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user);
            // ...
        })
        .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
    
    const hendlSubmit = (e)=> {
        e.preventDefault()
        localStorage.setItem('user', 'true')
        Navigation('/')
    }

    return (
        <>
            <div className="w-[500px] m-auto h-[500px] flex justify-center items-center">
                <div className="max-w-[300px]">
                    <div className="card pr-[30px] pb-[20px] pl-[30px] w-96 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h1 className="text-[25px] card-title">Logn Up</h1>
                        </div>
                        <form  onSubmit={hendlesubmit} className="flex flex-col gap-[10px] mb-[30px]">
                            <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input value={users.email} onChange={(e)=> setUsers((pref)=> ({...pref, email: e.target.value}))} type="text" className="grow" placeholder="Email" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input value={users.username} onChange={(e)=> setUsers((pref)=> ({...pref, username: e.target.value}))} type="text" className="grow" placeholder="Username" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input value={users.password} onChange={(e)=> setUsers((pref)=> ({...pref, password: e.target.value}))} type="password" className="grow" placeholder="Password" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                            <svg className="w-4 h-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <input value={users.photourl} onChange={(e)=> setUsers((pref)=> ({...pref, photourl: e.target.value}))} type="url" className="grow" placeholder="Photo url" />
                            </label>
                            <a className="text-lg text-center text-primary" href="/login">login</a>
                            <button type="submit" onClick={hendlSubmit} className="btn btn-primary">Buy Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logup