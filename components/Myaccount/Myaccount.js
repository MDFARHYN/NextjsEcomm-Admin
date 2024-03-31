"use client"
import { useState, useEffect } from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"
import AddProduct from "../AddProduct/AddProduct"
import ProductCard from "../Product/Product"
import Password from '../Password/Password'
import UpdateProfile from "../UpdateProfile/UpdateProfile"
import UpdateStoreProfile from "../Store/UpdateStoreProfile"
import StoreProfile from "../Store/StoreProfile"
import BkashPayment from "../PaymentSettings/Bkash"
import BulkUpload from "../Product/BulkUpload"
export default function MenubarDemo() {
  
  
  const [menuItem,setMenuItem] = useState("")

  useEffect(()=>{
    console.log(menuItem)
  },[menuItem])
  useEffect(()=>{
    setMenuItem("add_product")
  },[])
  return (
    <>
    <Menubar className="mt-2">
      <MenubarMenu>
       <MenubarTrigger className="cursor-pointer" value="add_product"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
         
 
        
        </MenubarTrigger>

        <MenubarTrigger className="cursor-pointer" >Product Management</MenubarTrigger>
        <MenubarContent>
   


          <MenubarItem className="cursor-pointer" value="add_product"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
           Add Product  
          </MenubarItem>
          
          <MenubarItem className="cursor-pointer"  value="bulk_upload"    onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
             Bulk Product Upload
          </MenubarItem>

          <MenubarItem className="cursor-pointer"  value="product_status"    onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
           Product Status 
          </MenubarItem>


       
        
          
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Store</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer" value="store_profile"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
            Store Profile
          </MenubarItem>
          <MenubarItem className="cursor-pointer" value="update_store"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
            Update Store Profile
          </MenubarItem>

          <MenubarItem className="cursor-pointer" value="bkash_payment"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
             Bkash Payment
          </MenubarItem>
          
         
           
         
        </MenubarContent>
      </MenubarMenu>
       
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Account</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer" value="change_password"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
            change password
          </MenubarItem>
          <MenubarItem className="cursor-pointer" value="update_user_profile"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
            update profile
          </MenubarItem>


          <Link href='/'>
              
          <MenubarItem className="cursor-pointer" value="logout"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
           Login
          </MenubarItem>
 
          </Link>
          <MenubarItem className="cursor-pointer" value="logout"  onClick={(e) => setMenuItem(e.target.getAttribute('value'))}>
           Logout
          </MenubarItem>
          
          
           
         
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    {menuItem == "add_product"  ?
      <AddProduct/>:
      menuItem == "product_status"?
      <ProductCard/>: menuItem == "bulk_upload" ?
      <BulkUpload/>
      :
      menuItem == "change_password"?
      <Password/>:menuItem == "update_user_profile"?
      <UpdateProfile/>: menuItem == "update_store"?
      <UpdateStoreProfile/>: menuItem == "store_profile"?
      <StoreProfile/>: menuItem == "bkash_payment"?
      <BkashPayment/>:""
     }
    
    </>

  )
}
