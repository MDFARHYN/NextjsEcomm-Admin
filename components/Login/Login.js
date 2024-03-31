"use client"
import React, {useEffect,useState} from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AiOutlineWarning } from "react-icons/ai";
import { Label } from "@/components/ui/label"
import Link from 'next/link'
 function Login() {
   const [userName,setuserName] = useState("")
   const [password,setpassword] = useState("")
   const [ErrMsg,setErrMsg] = useState("")

   const handleLogin = ()=>{
    setErrMsg("")
    if (!userName){
      return setErrMsg("please type your Email or Phone number")
    } else if (!password){
      return setErrMsg("please type your password")
    }
   }

  return (
    <>     
          
          <div className='flex flex-col justify-center items-center '>
          <div className="mt-20">
       
       <Label htmlFor="terms">Email/Phone</Label>
       <Input type="email" className='mb-5 mx-5 w-80' placeholder="Email/Phone" onChange={(e)=>setuserName(e.target.value)}/>
    </div>

       <div className="mb-5">
 
    <Label htmlFor="terms">password</Label>

      <Input type="password" className='mb-5 mx-5 w-80' placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
       
      </div>

      <Button className='mb-5 mx-5 w-80' onClick={handleLogin}>Login</Button>
      
       
      {ErrMsg && 
          <Alert variant="destructive" className='mb-10 w-5/4 mx-2'>
          <AiOutlineWarning className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
              {ErrMsg}
          </AlertDescription>
          </Alert>
        }
           
           <Link href="/register">

           
           <h1 className='text-lg font-semibold'>Don't have an account? Sign up</h1>
           </Link>

          </div>
        
         
         
           
          
    </>
  )
}

export default Login