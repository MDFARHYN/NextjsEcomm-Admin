"use client"
import * as React from "react"
import Swal from 'sweetalert2'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
 
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

export default function AddProduct() {
    const ImgRef = useRef([]);

    const [Variation,setVariation] = useState([{
        id: 1,
        title: "",
        description:"",
        orginal_price:"",
        discount:"",
        promotion_type:"",
        quantity:"",
        unit:"",
        parent_images:[ ]
      }])
 
     
   
    const handleAddVariation = (id)=>{
        setVariation((prev)=>[...prev,{
            id: id,
            title: "",
            description:"",
            orginal_price:"",
            discount:"",
            promotion_type:"",
            quantity:"",
            unit:"",
            parent_images:[ ]
        }])
       
    }
   
    const handleDeleteVariation = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                
                title: "Deleted!",
                text: "Your variation has been deleted.",
                icon: "success"
              });
              setVariation(prev => prev.filter(variation => variation.id !== id));
              

            }
          });
    }
  
    const handleKeyPressDiscount = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        
        // Prevent negative values and restrict to two digits
        if (
            event.target.value === '' &&
            (keyValue === '-' || keyCode === 45) // ASCII code for '-'
        ) {
            event.preventDefault();
        } else if (!/^\d{0,2}$/.test(event.target.value + keyValue)) {
            event.preventDefault();
        }
    };


    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        
        // Prevent negative values and restrict to two digits
        if (
            event.target.value === '' &&
            (keyValue === '-' || keyCode === 45) // ASCII code for '-'
        ) {
            event.preventDefault();
        } else if (!/^\d{0,10}$/.test(event.target.value + keyValue)) {
            event.preventDefault();
        }
    };
    
    const handleInput = (event) => {
        // Remove non-digit characters and restrict to two digits
        event.target.value = event.target.value.replace(/\D/g, '');
    };

    const handleInputDiscount = (event) => {
        // Remove non-digit characters and restrict to two digits
        event.target.value = event.target.value.replace(/\D/g, '').slice(0, 2);
    };
   

    useEffect(()=>{
        console.log(Variation,"variatiion")
    },[Variation])
    

 

    const handleFileSelect = (event, id) => {
      
        const file = event.target.files[0];
       
        if (file) {
          const fileSizeLimit = 5 * 1024 * 1024; // 5 MB in bytes
          if (file.size > fileSizeLimit) {
               
              return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `You can upload files up to ${fileSizeLimit / (1024 * 1024)} MB.`
            
              });
          }
        
          setVariation((prevVariation) => {
            const updatedVariation = [...prevVariation];
            const targetVariation = updatedVariation[id]; // Get the specific variation
            const existingImageIndex = targetVariation.parent_images.findIndex(
              (img) => img.file === file // Find if the same file already exists
            );
      
            if (existingImageIndex !== -1) { // If the file already exists
              updatedVariation[id].parent_images[existingImageIndex] = {
                file: file,
                preview_url: URL.createObjectURL(file),
                id: uuidv4(),
              };
            } else { // If it's a new image
              updatedVariation[id].parent_images.push({
                file: file,
                preview_url: URL.createObjectURL(file),
                id: uuidv4(),
              });
            }
      
            return updatedVariation;
          });

          

        }
      };


      const HandleDeleteImage = (img_id,var_id) => {
        //console.log("Received img_id:", img_id);
        /*setVariation(prev => {
            const updatedVariation = prev.map(variation => {
                if (variation.parent_images) {
                    variation.parent_images = variation.parent_images.filter(img => {
                        console.log("Filtering image with id:", img.id); // Log each image's id
                        return img.id !== img_id; // Filter out images with id not equal to img_id
                    });
                }
                return variation;
            });
            
            console.log("Updated variation:", updatedVariation); // Log updated state
            return updatedVariation;
        });*/
       
         
        const targetVariationIndex = Variation.findIndex(variation => variation.id === var_id);
        
        if (targetVariationIndex !== -1) {
            const targetVariation = Variation[targetVariationIndex];
            const updatedImages = targetVariation.parent_images.filter(img => img.id !== img_id);
            const updatedVariation = { ...targetVariation, parent_images: updatedImages };
            setVariation(prevVariations => {
                const updatedVariations = [...prevVariations];
                updatedVariations[targetVariationIndex] = updatedVariation;
                return updatedVariations;
            });
        }
        
    };
   

    const handleSubmit = ()=>{

      

    }

    
  return (
    <div className="flex justify-center mt-5 mb-10">
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
       </CardHeader>
       {Variation && Variation.map((data,index)=>(
            <div key={data.id}>
                     <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" placeholder="Name of your product"  
              onChange={e => {
              const newVariations = [...Variation];
              newVariations[index].title = e.target.value;
              setVariation(newVariations);
            }}
          />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Product description </Label>
              <Textarea placeholder="Type your message here." 
                onChange={e => {
                    const newVariations = [...Variation];
                    newVariations[index].description = e.target.value;
                    setVariation(newVariations);
                  }}
              />
              

             

            </div>
            {data.id == 1 &&
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="category">Select Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
             }

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Product Price  </Label>
              <Input id="price" type="number" placeholder="120"
                   onKeyPress={handleKeyPress}
                   onInput={handleInput} 
                onChange={e => {
                    const newVariations = [...Variation];
                    newVariations[index].orginal_price = e.target.value;
                    setVariation(newVariations);
                  }}
              />

            </div>

          
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="discount">discount</Label>
              <Input type="number" id="discount" placeholder="5%"
                  onKeyPress={handleKeyPressDiscount}
                  onInput={handleInputDiscount}   
                  onChange={e => {
                    const newVariations = [...Variation];
                    newVariations[index].discount = e.target.value;
                    setVariation(newVariations);
                  }}            

              />
            </div>


            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price_after_discount">price after discount</Label>
              <Input id="price_after_discount" placeholder={    data.discount && data.orginal_price !== 1  ? parseInt(data.orginal_price - (data.orginal_price * data.discount / 100)) : 0} className='font-semibold placeholder:text-black' disabled/>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="variation">variation</Label>
              <Input id="variation" placeholder="xxl"
                onChange={e => {
                    const newVariations = [...Variation];
                    newVariations[index].unit = e.target.value;
                    setVariation(newVariations);
                  }}
              />
            </div>


            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="variation">quantity</Label>
              <Input id="quantity" type="number" placeholder="0"
               onKeyPress={handleKeyPress}
               onInput={handleInput} 
                onChange={e => {
                    const newVariations = [...Variation];
                    newVariations[index].quantity = e.target.value;
                    setVariation(newVariations);
                  }}
              />
            </div>


            <div className="flex flex-wrap space-y-1.5 space-x-2">
               
               <div className="w-20 h-20 border-dotted border-2 border-orange-300 rounded-lg text-center cursor-pointer" id={data.id} onClick={() => ImgRef.current[data.id].click()}>upload Image</div>
              
             

                <input type="file" ref={(ref) => (ImgRef.current[data.id] = ref)} id={data.id} name="imageUpload" accept="image/jpeg, image/png, image/webp, .jpg, .png, .jpeg, .webp" className="hidden" onChange={(event) => handleFileSelect(event,index)}/>
                   
               { data.parent_images && data.parent_images.map((img)=>(
                <div key={img.id} className="flex flex-wrap space-x-1">
                    
                     <img   src={img.preview_url} className="h-20 w-20 rounded-lg"/>
                     <AiFillCloseCircle size={18} color="black" className="absolute bg-white cursor-pointer"  onClick={() => {
                            HandleDeleteImage(img.id,data.id);
                          }}
                        />
               </div>
                 
               
               ))
               }
                  
              
               

            </div>


          </div>

          
          
        </form>
      </CardContent>
     
    


      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={()=>handleAddVariation(uuidv4())}>Add Variation</Button>
        { data.id !== 1 &&
        <Button className='bg-red-500 hover:bg-red-600 text-white'  onClick={()=> data.id !== 1 && handleDeleteVariation(data.id)}>Delete Variation</Button>
         }
  
        </CardFooter>
       

            </div>
            
       ))}
<div className="flex justify-end">
<Button onClick={handleSubmit}>Submit</Button>

</div>

    </Card>
    </div>
  )
}
