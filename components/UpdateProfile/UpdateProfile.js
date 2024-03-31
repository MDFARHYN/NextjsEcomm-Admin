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


export default function UpdateProfile() {
    
 

  return (
    <>
    <div className="password flex justify-center mt-10">

    <div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
       </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">name</Label>
              <Input  id="name" placeholder="name"   />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mobile number">Mobile Number</Label>
              <Input  id="new_password" placeholder="mobile number"  />
            </div>

            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
         
        <Button  >Submit</Button>
      </CardFooter>
    </Card>
    </div>
    </div>
 </>
  )
}
