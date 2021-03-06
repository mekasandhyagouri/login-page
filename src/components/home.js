import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import '../App.css'



function Home() {

     const dispatch =useDispatch();


    const enteredNamelogin = useSelector(state=> state.login.enteredName);
    const enteredPasswordlogin= useSelector(state=> state.login.enteredPassword);
    console.log(enteredNamelogin)



   
    
    const enteredName = useSelector(state=> state.signup.signupName);
    const enteredPassword= useSelector(state=> state.signup.signupPassword);
    console.log(enteredName)

    const logOut =()=>{

        dispatch({type:'name', amount:'' });
    dispatch({type:'password', amount:'' });

    dispatch({type:'touched', amount:false });

    }




    if(enteredNamelogin === enteredName && enteredPasswordlogin === enteredPassword)
    {
      return (
        <>
        <div className="app">

          <div>
            <h3>welcome to the site!! </h3>
          </div>
          <div>
            
              <Link to="/" > <button onClick={logOut}>logout</button></Link>
        
          </div>
        </div>
        </>
      );

    }
    else{
      return<>
              <div className="app">

      <h4>you password is incorrect </h4>
      <Link to="/login" > <button onClick={logOut}>Login again</button></Link>
      </div>

      </>
    }

}

export default Home;
