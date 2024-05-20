// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import axios from "axios"

function MyProfile() {
  const [file, setFile] = useState("");
  //   const [name, setName] = useState("")
    // const [email,setEmail] =useState("")
    // const [age,setAge] =useState("")
    // const [Pnumber,setPNumber] =useState("")
    // const [gender,setGender] = useState("")
//     const [showdata,setShowData] =useState()

//  useEffect(() => {
//     axios.post("http://localhost:8080/show",{
//         name:name
//     })
//     .then((res)=>{
//         console.log(res.data.name)
//        setShowData(res.data.name) 
      
//     })
//     setName(name)
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
//  }, [])






  return (<>
    <div>
   <form method='post'>
   <div className='formregister'>
            <label htmlFor="">Profile Picture</label>
            <input type="file" name="file"  value={file} onChange={(e)=>setFile(e.target.value)} />
            <img src={file} />
          </div> 
   <div className='formregister'>
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder='enter your name'  
          
             />
          </div> 
    
          <div className='formregister'>
            <label htmlFor="">Age</label>
            <input type="text" name="AGE" placeholder='enter your name'
             />
          </div> 
          <div className='formregister'>
            <label htmlFor="">Email</label>
            <input type="text" name="Email" placeholder='enter your name' 
            />
          </div> 
          <div className='formregister'>
            <label htmlFor="">Phone Number</label>
            <input type="Number" name="Number" placeholder='enter your name'
            />
          </div> 
          <div className='formregister'>
            <label htmlFor="">Gender</label>
           <select >
            <option value="">select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">other</option>
            </select>
          </div> 
         <button type='submit'>submit</button>
    </form>  
 </div>





 </> )
}

export default MyProfile
