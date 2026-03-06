import React from "react";
import AppContext from "./AppContext";

import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const AppState = (props) => {



  const URL = "https://ems-rxh5.onrender.com/api";


  

  const [isloggedIn, setLoggedIn] = useState(false);
  
   const [Leave, setAllLeave]=useState([])
    const [singleLeave, setSingleLeave] = useState("")
      const [profile, setUserProfile] = useState("")
  
             const [allAttendance, setAllAttendances] = useState([])
              const [employeeprofile, setEmployeeProfile]= useState("")
      
                 const [allEmployee, setAllEmployee]= useState([])


                   const [isAdminLogin, setIsAdminLogin] = useState(false)


              const[viewEmployee, setViewEmployee]= useState("")
   
                      const[updateEmployee, setUpadteEmployee]= useState("")
          

                 const [allAttendancesAdmin, setAllAttendanceAdmin]= useState([])

  
    const [allLeaveAdmin, setAllLeaveAdmin]= useState([])
    
      const [role, setRole] = useState(null)


        const userProfile=async()=>{
            const res= await  axios.get(`${URL}/user/profile`,{
              headers:{
                Auth:localStorage.getItem("employeeToken")
              }
            })
               setUserProfile(res.data.user)
              console.log("profile", res.data.user)
        } 




  const userProfileUpadte= async(name, email, phone, department, position, address)=>{

      try {
          const res= await axios.put(`${URL}/user/profile-update`,{name, email, phone, department, position, address},
            { headers:{
              "Content-Type":"application/json",
                Auth : localStorage.getItem("employeeToken")
            }}
          )
                  if(res.data.success){
                toast.success(res.data.message, {
                   position: "top-right",
            autoClose: 1000,
          hideProgressBar: false,
           closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           theme: "light",

                  });
                    return  true
                  }

            toast.error(res.data.message, {
            position: "top-right",
            autoClose: 1000,
          hideProgressBar: false,
           closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           theme: "light",

                  });
                    return false

           
      } catch (error) {
      
           toast.error({ message: error.message})
      }
  }


  useEffect(() => {
    const token = localStorage.getItem("employeeToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);


          
     // user register 

  const UserRegister= async(name, email, password, phone, department,  position,address )=>{
 
       try {
        
         const res= await axios.post(`${URL}/user/register`,{name, email, password, phone, department,  position,address })

      
         if(res?.data?.success){
           
               toast.success(res.data.message, {
                   position: "top-right",
            autoClose: 2000,
          hideProgressBar: false,
           closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           theme: "light",

                  });


                  
            return true
         }


            toast.error( res.data.message, {
position: "top-right",
autoClose: 1068,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});


           return false



       } catch (error ) {
        
            toast.error({ message: error.message})       
          return false
       }


  }

    
  
  
  const UserAndAdminLogin = async (email, password) => {
  try {
    const res = await axios.post(`${URL}/user/login`, { email, password });

   

    if (res?.data?.success) {

      const { token, role, message } = res.data;

   
      if (role === "admin") {
        localStorage.setItem("adminToken", token);
           setRole("admin")
             setIsAdminLogin(true)

      } else {
        localStorage.setItem("employeeToken", token);
          setRole("employee")
           setLoggedIn(true)
      }

      // setLoggedIn(true);

      toast.success(message);
      return role;
    }

    toast.error(res.data.message);
    return false;

  } catch (error) {
    toast.error(error.response?.data?.message );
    return false;
  }
};

useEffect(() => {

  const adminToken = localStorage.getItem("adminToken")
  const employeeToken = localStorage.getItem("employeeToken")

  if (adminToken) {
       setIsAdminLogin(true)
        setRole("admin")
  
  }

  if (employeeToken) {
        setLoggedIn(true)
    setRole("employee")
    
  }

}, [])


      //    user logout function

        const logout = () => {
             localStorage.removeItem("employeeToken");
               setLoggedIn(false)
                setAllLeave(null);
               setAllAttendances(null)
                  };



              //  for leave  ||   /api/leave/apply  
        
   const ApplyLeave = async(leaveType, totalDays, fromDate, toDate,reason)=>{

   if (!leaveType || !totalDays || !fromDate || !toDate || !reason) {
         toast.error("Please fill all fields");
           return;
      }
         
  try {
    const res= await axios.post(`${URL}/leave/apply `,{leaveType, totalDays, fromDate, toDate,reason},
      {
        headers:{
           "Content-Type": "application/json",
          Auth:localStorage.getItem("employeeToken")
        }
      }
    )
 
         if(res?.data?.success){
     
     toast.success(res.data.message)
      return true

         }

          toast.error(res.data.message)
             

                return false
          
     




  } catch (error) {
    
  }

      }    
         
               // get All LEave
        const getAllLeave= async()=>{
     
           const res= await axios.get(`${URL}/leave/all`,
            {
              headers:{
                "Content-Type":"application/json",
                 Auth:localStorage.getItem("employeeToken")
              }
            }
           )
                         if(res.data.success){
                      setAllLeave(res.data.allLeave)
              
                   return true

            }
                   toast.error(res.data.message)
                    return false
          

            
        }
        
          //  get sinle leave by id 


           const getSingleLeaveById=async(leaveId)=>{
           
              try {
                  const res= await axios.get(`${URL}/leave/${leaveId}`,
                    
                     {
                      headers:{
                        Auth:localStorage.getItem("employeeToken")
                      }
                     }
                  )

                       setSingleLeave(res.data.singleLeave)
                          // toast.success(res.data.message)
                           toast.success(res.data.message, {
                   position: "top-right",
            autoClose: 1000,
          hideProgressBar: false,
           closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           theme: "light",

                  });
                    // console.log("leaveId", res.data.singleLeave)
              } catch (error) {
                
              }


           }

            //  attendance 


   const CheckInattendance =async(checkInTime)=>{
                try {
                 const res= await  axios.post(`${URL}/attendance/check-in`,
                  {checkInTime},
                  {
                    headers:{
                      Auth:localStorage.getItem("employeeToken")
                    }
                  }
                 )   
               
    if(res.data.success){
                  
toast.success(res.data.message, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
  return  true
                 }

  toast.error(res.data.message, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});

  return false
    
                  // console.log("check-in", res)
                } catch (error) {
                 
                   toast.error(error.response.data.message)
                }
            }


     const CheckOutAttendance = async(checkOutTime)=>{

      try {
           const res= await axios.post(`${URL}/attendance/check-out`,
        {checkOutTime},
        {
           headers:{
            Auth:localStorage.getItem("employeeToken")
         
           }
        }

      )


         if(res.data.success){
        toast.success(res.data.message, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

}); 

 return true
        }


         toast.error(res.data.message, {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});

  return false

      } catch (error) {
        
      }
      // console.log("check-out", res)

     }






    const   GetAllAttendances = async()=>{
        const res= await axios.get(`${URL}/attendance/my`,
          {
            headers:{
               "Content-Type":"application/json",
              Auth:localStorage.getItem("employeeToken")
            }
          }
        )

            setAllAttendances(res.data.attendances)
        //  console.log("get attendance", res.data.attendances)
    }

  

    //  employee profile 

    const getEmployeeProfile =async()=>{
        
      try {
         const res= await axios.get(`${URL}/employee/my`,{
        headers:{
          Auth: localStorage.getItem("employeeToken")
        }
         })  
                setEmployeeProfile(res.data.employee)
          console.log("employeeprofile, ", res.data.employee)
      } catch (error) {
        
      }
    }







                                           //     for admin 


   
                                  
      useEffect(() => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    setIsAdminLogin(true);
  } else {
    setIsAdminLogin(false);
  }
}, []); 

 
const AllEmployee = async () => {
   try {

      const res = await axios.get(`${URL}/user/allEmployee`, {
         headers: {
            Auth: localStorage.getItem("adminToken")
         }
      })

  

      if(res.data.success){
         setAllEmployee(res.data.employees)
      } else {
         console.log("Backend Error 👉", res.data.message)
      }

   } catch (error) {
      console.log("Catch Error 👉", error.response?.data)
   }
}

    const AdminLogOut =()=>{

        setIsAdminLogin(false) 
       localStorage.removeItem("adminToken")
          setAllEmployee([])
          setAllAttendanceAdmin([])
           setAllLeaveAdmin([])
             setRole(null)
    }

   const  DeleteEmployee= async(id)=>{

     try {
        const res= await axios.delete(`${URL}/user/employee/${id}`,{
          headers:{
              Auth:localStorage.getItem("adminToken")
          }
        }) 

               

             setAllEmployee(prev=>prev.filter(empl=>empl._id!==id))
             toast.success(res.data.message)
       



          console.log(res)
     } catch (error) {
      
        toast.error({ message: res.message})
     }
   }

   const  ViewSingleEmployee = async(id)=>{

     try {
        const res=   await axios.get(`${URL}/user/employee/${id}`,{
          headers:{
                Auth:localStorage.getItem("adminToken") 
          }
        })
        
  

         setViewEmployee(res.data.employee)

          // console.log(res)
     } catch (error) {
      
      res.json({message: error.message})
     }
   }

   const UpdatedEmployee= async(id, name, email,phone, department, position, salary,address)=>{
      try {
          const res= await  axios.put(`${URL}/user/employee/${id}`, {name, email,phone, department, position, salary,address},{
             headers:{
                  Auth:localStorage.getItem("adminToken") 
             }
          }) 
               
                    
                   if(res.data.success){
            

                 toast.success(res.data.message)
                    return true
                   }    
                 toast.error(res.data.message)
                       return false

  
             
           
      } catch (error) {
        
      }
   }



      const ALlAttencdances= async ()=>{
           try {
              const res= await axios.get(`${URL}/attendance/all`,{
                 headers:{
                       Auth:localStorage.getItem("adminToken") 
                 }
              })

                 setAllAttendanceAdmin(  res.data.att)
                
           } catch (error) {
            
           }
      }



   useEffect(()=>{
     ALlAttencdances()
   },[])


      const AllLeave= async()=>{
          try {
             const res= await axios.get(`${URL}/leave/admin/all`,{
                 headers:{
            Auth:localStorage.getItem("adminToken") 
            }
           })
                        setAllLeaveAdmin(res.data.allLeave)
                    //  console.log("res res", res.data.allLeave)
              
          } catch (error) {
            
          }
      }

      useEffect(()=>{
         AllLeave()
      },[])


   const UpdateLeaveAdmin=async(id , status)=>{
       try {
          const res=await  axios.put(`${URL}/leave/admin/updateleave/${id}`,

            {status},
            {
            headers:{
            Auth:localStorage.getItem("adminToken")   
            }
          })
           

           AllLeave()
          //  console.log(res)
       } catch (error) {
        
       }
   }



  return (
    <AppContext.Provider
      value={{
          UserRegister,
             UserAndAdminLogin,
       
           logout,
        isloggedIn,
        setLoggedIn,

        ApplyLeave,
        Leave,
            getAllLeave,
             setAllLeave,
              getSingleLeaveById,
               singleLeave,
               profile,
                 userProfile,
                 CheckInattendance,
                 CheckOutAttendance,
                  
                 
                    allAttendance,
                      GetAllAttendances ,
                      employeeprofile,
                       getEmployeeProfile,
                        userProfileUpadte,
                        allEmployee,
                        AllEmployee,
                      
                         isAdminLogin,
                         AdminLogOut,
                           DeleteEmployee,
                            ViewSingleEmployee,
                             viewEmployee,
                              UpdatedEmployee,
                               updateEmployee,
                                 allAttendancesAdmin,
                                 allLeaveAdmin,
                                  UpdateLeaveAdmin,
                                    AllLeave,
                                     ALlAttencdances,
                                       role,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
