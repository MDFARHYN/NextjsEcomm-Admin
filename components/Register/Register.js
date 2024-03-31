"use client"
 
import { useEffect, useState, useRef } from "react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

 import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
 import { AiOutlineWarning } from "react-icons/ai";
import Link from "next/link"

export default function CardWithForm() {
    const [InputFrm,setInputFrm] = useState({'first_name':"",'mobile_number':"",'email':"",'domain':"",'password':"","password2":"","is_applied":true})
    const [selectedValue, setSelectedValue] = useState('');

    const [ErrMsg,setErrMsg] = useState("")
    const [alertOpen,setalertOpen] = useState(false)
    const [alertClose,setalertCLOSE] = useState(true)
     const handleRegister = ()=>{
       
        setErrMsg(""); // Reset error message
        if (!InputFrm.first_name) {
          return setErrMsg("Please type your name");

        }else if (!InputFrm.mobile_number){
            return setErrMsg("pelase type your mobile number");
        }else if (!InputFrm.email){
            return setErrMsg("pelase type your email");
        }else if (!InputFrm.domain){
            return setErrMsg("pelase type your domain");
        }else if (!InputFrm.password){
            return setErrMsg("pelase type your password");
        }else if (InputFrm.password !== InputFrm.password2){
            return setErrMsg("Two password fields don't match");

        }else if (!selectedValue){
            return setErrMsg("Please select your Division");

        }
        
       
    }



   
 
    useEffect(()=>{
        console.log(InputFrm)
         
    },[InputFrm])

 
 

  return (
    <div className="flex flex-col items-center mt-20">
    <Card className="w-[350px]">
       
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>You can start selling by creating an account</CardDescription>
         <Link href="/" className="font-semibold">already have an account? login</Link>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="your Name"    
            
            onChange={(event) => setInputFrm(prevState => ({
            ...prevState,
            first_name: event.target.value
          }))}
          
          />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">mobile</Label>
              <Input id="name" placeholder="your mobile number"
                 onChange={(event) => setInputFrm(prevState => ({
                    ...prevState,
                    mobile_number: event.target.value
                  }))}
              
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">email</Label>
              <Input id="name" placeholder="your mail" 
               onChange={(event) => setInputFrm(prevState => ({
                ...prevState,
                email: event.target.value
              }))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">domain</Label>
              <Input id="name" placeholder="example.com" 
               onChange={(event) => setInputFrm(prevState => ({
                ...prevState,
                domain: event.target.value
              }))}
              
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input  type='password'  id="name" placeholder="password" 
               onChange={(event) => setInputFrm(prevState => ({
                ...prevState,
                password: event.target.value
              }))}
              
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">confirm password</Label>
              <Input type='password' id="name" placeholder="confirm password" 
                onChange={(event) => setInputFrm(prevState => ({
                    ...prevState,
                    password2: event.target.value
                  }))}
              
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Select your Division</Label>
              <Select  onValueChange={(newValue) => setSelectedValue(newValue)}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Barishal ">Barishal</SelectItem>
                  <SelectItem value="Chattogram">Chattogram </SelectItem>
                  <SelectItem value="Dhaka">Dhaka</SelectItem>
                  <SelectItem value="Khulna">Khulna </SelectItem>
                  <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="Rangpur">Rangpur</SelectItem>
                    <SelectItem value="Mymensingh">Mymensingh </SelectItem>
                    <SelectItem value="Sylhet">Sylhet </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      
      {ErrMsg && 
                <Alert variant="destructive" className='mb-10 w-5/4 mx-2'>
                <AiOutlineWarning className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                     {ErrMsg}
                </AlertDescription>
                </Alert>
              }

      <CardFooter className="flex justify-end ">
        
        <Button onClick={handleRegister}> Sign up</Button>
      </CardFooter>
              
    </Card>
    </div>
  )
}
