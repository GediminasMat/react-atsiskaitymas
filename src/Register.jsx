import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
 

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onLogin = () => {
    setLoading(true)
    axios({
      method: "post",
      url: "https://autumn-delicate-wilderness.glitch.me/v1/auth/register",
      data: {
        email: email,
        password: password,
      },
    })
      .then(function (response) {
        console.log(response);
        
        alert('Successfuly registered! Log in now')
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
      setLoading(false)
  };

  if (loading) {
    return <span>Loading ...</span>;
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'10px', padding:'15px' }}>
      Register form 
      <input type="email" placeholder="email .." required onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="password .." required onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={() => onLogin()}>Register</button>
    </div>
  );
};

export default Register;
