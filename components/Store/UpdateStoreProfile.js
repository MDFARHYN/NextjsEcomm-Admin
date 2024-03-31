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
 

export default function UpdateStoreProfile() {
   const  [Shop,SetShop] = useState({'shop_address':'',
                              'support_phone_number':'',
                              'support_email_address':'',
                              'shop_logo':'',
                              'logo_preview_url':'',
                              'google_tag':'',
                              'facebook':'',
                              'twitter':'',
                              'whatsapp':'',

                            }) 
 
    const handleLogo = (event)=>{
      const file = event.target.files[0]
      if (file){
        SetShop({...Shop,shop_logo:file,logo_preview_url:URL.createObjectURL(file)})
      }  
    }
 

  return (
    <>
    <div className="password flex justify-center mt-10">

    <div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Update Store</CardTitle>
       </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="shop_address">shop address</Label>
              <Input value={Shop.shop_address}  id="shop_address" placeholder="shop address" onChange={(e)=>SetShop({...Shop,shop_address:e.target.value})}  />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="support_phone_number">support phone number</Label>
              <Input value={Shop.support_phone_number}  onChange={(e)=>SetShop({...Shop,support_phone_number:e.target.value})}  id="support_phone_number" placeholder="support phone number"  />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="support_email_address">support email address</Label>
              <Input  value={Shop.support_email_address}  onChange={(e)=>SetShop({...Shop,support_email_address:e.target.value})}   id="support_email_address" placeholder="support email address"  />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="google_Tag">google Tag</Label>
              <Input  id="google_Tag"  value={Shop.google_tag}  onChange={(e)=>SetShop({...Shop,google_tag:e.target.value})}  placeholder="google Tag"  />
            </div>
            
            

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">shop logo</Label>
              <Input type="file"  accept=".jpg, .jpeg, .png" id="logo" placeholder="Google Tag"  onChange={handleLogo} />
            </div>
            {Shop.logo_preview_url && 
            <div className="flex flex-col space-y-1.5 w-28 h-28 rounded-lg">
             
              <img src={Shop.logo_preview_url} className="w-28 h-28 rounded-lg" />
            </div>
            }  
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="facebook pag">facebook page</Label>
              <Input  id="facebook page" value={Shop.facebook}  onChange={(e)=>SetShop({...Shop,facebook:e.target.value})}  placeholder="facebook page link"  />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="twitter pag">twitter page</Label>
              <Input  id="twitter page" value={Shop.twitter}  onChange={(e)=>SetShop({...Shop,twitter:e.target.value})}  placeholder="twitter page link"  />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="whatsapp pag">whatsapp page</Label>
              <Input  id="whatsapp page" value={Shop.whatsapp}  onChange={(e)=>SetShop({...Shop,whatsapp:e.target.value})}  placeholder="whatsapp page link"  />
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
