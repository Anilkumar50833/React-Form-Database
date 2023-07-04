import React from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const App = () =>{

      const[data,setData] = useState({
        

      });
      const {FullName,Email,password,confirmpswd} = data;
      const changehandler =e=>{
          setData({...data,[e.target.name]:e.target.value});
      }
      
      const SubmitHandler = event =>{
        event.preventDefault();
        
        axios.post('https://react-js-db-a8fca-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("Submit successfully...."))
       }

      return(
        <div>
          <center>
            <form autoComplete='off' onSubmit={SubmitHandler}>

                  <h1>Login Here</h1>
                  <input type='text' name='FullName' value={FullName} onChange={changehandler} placeholder='FullName'/><br/>
                  
                  <input type='text'  name='Email' value={Email} onChange={changehandler} placeholder='Email'/><br/>
                  
                  <input type='text'  name='password' value={password} onChange={changehandler} placeholder='Password'/><br/>
                  
                  <input type='text'  name='confirmpswd' value={confirmpswd} onChange={changehandler} placeholder='confirmpswd'/><br/>

                  <input type='submit' name='SubmitHandler'></input>
            </form>
          </center>
        </div>
      )

}
export default App;