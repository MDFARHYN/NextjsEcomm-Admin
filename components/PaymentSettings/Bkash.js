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
import { Checkbox } from "@/components/ui/checkbox"


export default function BkashPayment() {
    
    const [Bkash,setBkash] = useState({'bkash_username':'',
                                       'bkash_password':'',
                                       'bkash_app_key':'',
                                       'bkash_app_secret':'',
                                       'bkash_create_payment_api':'',
                                       'bkash_execute_payment_api':'',
                                       'bkash_grant_token_api':'',
                                       'is_active':false,
                                       })

 
    
 
 

  return (
    <>
    <div className="password flex justify-center mt-10">

    <div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Bkash Payment Setting</CardTitle>
       </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_username">bkash username</Label>
              <Input  id="bkash_username" value={Bkash.bkash_username} onChange={(e)=>setBkash({...Bkash,bkash_username:e.target.value})} placeholder="bkash username"  />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_password">bkash password</Label>
              <Input  id="bkash_password" value={Bkash.bkash_password} onChange={(e)=>setBkash({...Bkash,bkash_password:e.target.value})}  placeholder="bkash password"  />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_app_key">bkash app key</Label>
              <Input  id="bkash_app_key" placeholder="bkash app key"  value={Bkash.bkash_app_key} onChange={(e)=>setBkash({...Bkash,bkash_app_key:e.target.value})}  />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_app_secret">bkash app secret</Label>
              <Input  id="bkash_app_secret" placeholder="bkash app secret" value={Bkash.bkash_app_secret} onChange={(e)=>setBkash({...Bkash,bkash_app_secret:e.target.value})}  />
            </div>
            
            
 

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_create_payment_api">create payment api</Label>
              <Input  id="bkash_create_payment_api" placeholder="create payment api" value={Bkash.bkash_create_payment_api} onChange={(e)=>setBkash({...Bkash,bkash_create_payment_api:e.target.value})}  />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_execute_payment_api">bkash execute payment api</Label>
              <Input  id="bkash_execute_payment_api" placeholder="bkash execute payment api"  value={Bkash.bkash_execute_payment_api} onChange={(e)=>setBkash({...Bkash,bkash_execute_payment_api:e.target.value})}  />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bkash_grant_token_api">bkash grant token api</Label>
              <Input  id="bkash_grant_token_api" placeholder="bkash grant token api"  value={Bkash.bkash_grant_token_api} onChange={(e)=>setBkash({...Bkash,bkash_grant_token_api:e.target.value})} />
            </div>
            
            <div className="flex items-center space-x-2">
            
            <input  
                    type="checkbox" 
                    id="activeBkash"
                    name="is_active"
                    checked={Bkash.is_active}
                    onChange={(e)=>setBkash({...Bkash,is_active:e.target.checked})}
                     
                    
            />

            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Active Bkash
            </label>
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
