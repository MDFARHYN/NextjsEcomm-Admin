import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Swal from 'sweetalert2'


export default function CardWithForm() {
    
    const [OldPassword,setOldPassword] = useState()
    const [Password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    
    const handleSubmitPassword = ()=>{
    
      if (Password !== confirmPassword){
               
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `New Password and Confirm Password doesn't match`
        
          });
      }
    }

  return (
    <>
    <div className="password flex justify-center mt-10">

    <div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
       </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">old password</Label>
              <Input type="password" id="name" placeholder="old password" onChange= {(e)=>setOldPassword(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="new_password">new password</Label>
              <Input type="password" id="new_password" placeholder="new password" onChange= {(e)=>setPassword(e.target.value)} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="new_password">confirm password</Label>
              <Input type="password" id="confirm_password" placeholder="confirm password" onChange= {(e)=>setConfirmPassword(e.target.value)} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
         
        <Button onClick={handleSubmitPassword}>Submit</Button>
      </CardFooter>
    </Card>
    </div>
    </div>
 </>
  )
}
