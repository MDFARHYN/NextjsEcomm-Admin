import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect, useRef } from "react"
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import { data } from "autoprefixer"
export default function DialogProdut({variation_product}) {
 
    const ImgRef = useRef([]);
    const [DeleteMessage,setDeleteMessage] = useState()
    const [Variation,setVariation] = useState( [variation_product])
    const [ErrMsg,setErrMsg] = useState("")
     useEffect(()=>{
        console.log(variation_product)
     },[variation_product])
   
   
   
     const handleDeleteVariation = (id, is_parent) => {
        setDeleteMessage("");
        if (is_parent) {
          setVariation(prev => prev.filter(variation => variation.id !== id));
        } else {
          // Check if child_product exists before filtering
          setVariation(prev =>
            prev.map(variation =>
              variation.child_product
                ? { ...variation, child_product: variation.child_product.filter(variation => variation.id !== id) }
                : variation
            )
          );
        }
        setDeleteMessage("Product successfully deleted");
        setTimeout(() => {
          setDeleteMessage("");
        }, 2000);
      };
      
  
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
    

    const handleFileSelect = (event, var_id, is_parent) => {
        const file = event.target.files[0];
    
        if (file) {
            const newImage = { id: uuidv4(), imageFile: file, image: URL.createObjectURL(file) };
    
            if (is_parent) {
                setVariation(prev => prev.map(variation => {
                    if (variation.id === var_id) {
                        return {
                            ...variation,
                            parent_images: [...variation.parent_images, newImage]
                        };
                    }
                    return variation;
                }));
            } else {
                setVariation(prev => prev.map(variation => ({
                    ...variation,
                    child_product: variation.child_product.map(childVariation => {
                        if (childVariation.id === var_id) {
                            return {
                                ...childVariation,
                                parent_images: [...childVariation.parent_images, newImage]
                            };
                        }
                        return childVariation;
                    })
                })));
            }
        }
    };
    
    
     

      

    const handleDeleteImage = (img_id, var_id) => {
        const updatedVariation = Variation.map(variation => {
            if (variation.id === var_id) {
                return {
                    ...variation,
                    parent_images: variation.parent_images.filter(img => img.id !== img_id)
                };
            } else if (variation.child_product) {
                return {
                    ...variation,
                    child_product: variation.child_product.map(childVariation => {
                        if (childVariation.id === var_id) {
                            return {
                                ...childVariation,
                                parent_images: childVariation.parent_images.filter(img => img.id !== img_id)
                            };
                        }
                        return childVariation;
                    })
                };
            }
            return variation;
        });
    
        setVariation(updatedVariation);
    };
  

    const handleSubmit = () => {
      let errorFound = false;
    
      Variation.forEach((data) => {
        if (!data.title) {
          setErrMsg("please add title");
          errorFound = true;
          return; // exit the loop
        } else if (!data.orginal_price) {
          setErrMsg("please add price");
          errorFound = true;
          return; // exit the loop
        } else if (!data.unit) {
          setErrMsg("please add variation");
          errorFound = true;
          return; // exit the loop
        } else if (data.parent_images.length === 0) {
          setErrMsg("please add images");
          errorFound = true;
          return; // exit the loop
        }
    
        data.child_product &&
          data.child_product.forEach((child_data) => {
            if (!child_data.title) {
              setErrMsg("please add title");
              errorFound = true;
              return; // exit the loop
            } else if (!child_data.orginal_price) {
              setErrMsg("please add price");
              errorFound = true;
              return; // exit the loop
            } else if (!child_data.unit) {
              setErrMsg("please add variation");
              errorFound = true;
              return; // exit the loop
            } else if (child_data.parent_images.length === 0) {
              setErrMsg("please add images");
              errorFound = true;
              return; // exit the loop
            }
          });
      });
    
      if (!errorFound) {
        console.log("success");
      }
    };
    

  return (
    <Dialog > 
      <DialogTrigger asChild>
        <Button>Edit Product</Button>
      </DialogTrigger>
      <DialogContent className="h-screen overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
          <DialogDescription>
            Make changes to your product. Click save when you're done.
          </DialogDescription>
          {DeleteMessage &&
                     <DialogTitle className="text-red-400"> {DeleteMessage}</DialogTitle>

          
          }
        </DialogHeader>
     
          {Variation && Array.isArray(Variation) && Variation.map((product,index)=>(
            <div key={product.id}>
                    <div className="mb-10 border-2 border-dotted p-1 border-orange-400">
         {!product.title &&
          <div className="text-sm text-red-500 text-center mb-2">pelase write your product name</div>
         }
          <div className="grid grid-cols-4 items-center gap-4 mb-2 mt-2 mx-2">
            <Label htmlFor="name" className="text-right">
           product name
            </Label>
            <Input
              id={`${product.id}-title`}
              value={product.title}
              onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? { ...prevProduct, title: e.target.value }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
              
            />

         
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="username" className="text-right">
               description
            </Label>
            <Textarea
              id={`${product.id}-description`}
              value={product.description}
              onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? { ...prevProduct, description: e.target.value }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="category">  Category</Label>
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
          {!product.orginal_price &&
          <div className="text-sm text-red-500 text-center mb-2">pelase add your product price</div>
         }
          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
            Price
            </Label>
            <Input
            value={product.orginal_price}
               id={`${product.id}-price`}
               onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? { ...prevProduct, orginal_price: e.target.value }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>


          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
            discount
            </Label>
            <Input
               id={`${product.id}-discount`}
               value={product.discount}
               onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? { ...prevProduct, discount: e.target.value }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
            price after discount
            </Label>
            <Input
             id={`${product.id}-price-after-discount`}
              value={parseInt(product.orginal_price) - parseInt(product.orginal_price * product.discount/100)}
              className="col-span-3"
              disabled
            />
          </div>

          {!product.unit &&
          <div className="text-sm text-red-500 text-center mb-2">pelase add your product variation</div>
         }
          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
           variation
            </Label>
            <Input
              value={product.unit}
              id={`${product.id}-unit`}
              onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? { ...prevProduct, unit: e.target.value }
                      : prevProduct
                  )
                )
              } 
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
           quantity
            </Label>
            <Input
               value={product.quantity}
               id={`${product.id}-quantity`}
               onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? { ...prevProduct, quantity: e.target.value }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>


            <div className="flex items-center space-x-2  mb-2">
            <Checkbox  id={`${product.id}-stock`} 
            
            
            />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                out of stock
            </label>
            </div>

            { product.parent_images.length == 0 && 
            <div className="text-sm text-red-500 text-center mb-2">pelase upload your product picture</div>
            }
            <div className="flex flex-wrap space-y-1.5 space-x-2  mb-2">
               
               <div className="w-20 h-20 border-dotted border-2 border-orange-300 rounded-lg text-center cursor-pointer"  id={product.id} onClick={() => ImgRef.current[product.id].click()}  >upload Image</div>
              
             

                <input type="file"  ref={(ref) => (ImgRef.current[product.id] = ref)} id={product.id}  name="imageUpload" accept="image/jpeg, image/png, image/webp, .jpg, .png, .jpeg, .webp" className="hidden" onChange={(event) => handleFileSelect(event,product.id,true)}/>
                 
                         
                 
               { product.parent_images.map((img)=>(
                <div key={img.id} className="flex flex-wrap space-x-1">
                    {img.image ? (<>
                        <img   src={img.image} className="h-20 w-20 rounded-lg"/>
                     <AiFillCloseCircle size={18} color="black" className="absolute bg-white cursor-pointer"  onClick={() => {
                            handleDeleteImage(img.id,product.id);
                          }}
                        />
                    </>):<>
                    <img   src={img.preview_url} className="h-20 w-20 rounded-lg"/>
                     <AiFillCloseCircle size={18} color="black" className="absolute bg-white cursor-pointer"  onClick={() => {
                            handleDeleteImage(img.id,product.id);
                          }}
                        />
                    </>}
                  
                        
            
                        
                       
               </div>
                 
               
               ))
               }
                  
              
               

            </div>

            <Button className='bg-red-500 hover:bg-red-600 text-white mb-2' onClick={()=>handleDeleteVariation(product.id,true)} >Delete Product</Button>


            </div>
            
            
             <>
             { product.child_product &&  product.child_product.map((child_product,index)=>(
            <div key={child_product.id}>
                    <div className="mb-10 border-2 border-dotted p-1 border-orange-400">
           
           {!child_product.title && 
           
           <div className="text-sm text-red-500 text-center mb-2">pelase write your product name</div>

           }               
          <div className="grid grid-cols-4 items-center gap-4 mb-2 mt-2 mx-2">
            <Label htmlFor="name" className="text-right">
           product name
            </Label>
            <Input
              id={`${child_product.id}-product_name`}
              value={child_product.title}
              onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? {
                          ...prevProduct,
                          child_product: prevProduct.child_product.map(
                            (prevChildProduct) =>
                              prevChildProduct.id === child_product.id
                                ? { ...prevChildProduct, title: e.target.value }
                                : prevChildProduct
                          ),
                        }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="username" className="text-right">
               description
            </Label>
            <Textarea
                id={`${child_product.id}-description`}
                value={child_product.description}
                onChange={(e) =>
                  setVariation((prevVariation) =>
                    prevVariation.map((prevProduct) =>
                      prevProduct.id === product.id
                        ? {
                            ...prevProduct,
                            child_product: prevProduct.child_product.map(
                              (prevChildProduct) =>
                                prevChildProduct.id === child_product.id
                                  ? { ...prevChildProduct, description: e.target.value }
                                  : prevChildProduct
                            ),
                          }
                        : prevProduct
                    )
                  )
                }
              className="col-span-3"
            />
          </div>

          {!child_product.orginal_price && 
           
           <div className="text-sm text-red-500 text-center mb-2">pelase add your product price</div>

           }    

          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
            Price
            </Label>
            <Input
               id={`${child_product.id}-price`}
               value={child_product.orginal_price}
               onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? {
                          ...prevProduct,
                          child_product: prevProduct.child_product.map(
                            (prevChildProduct) =>
                              prevChildProduct.id === child_product.id
                                ? { ...prevChildProduct, orginal_price: e.target.value }
                                : prevChildProduct
                          ),
                        }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>


          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
            discount
            </Label>
            <Input
               id={`${child_product.id}-discount`}
               value={child_product.discount}
              onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? {
                          ...prevProduct,
                          child_product: prevProduct.child_product.map(
                            (prevChildProduct) =>
                              prevChildProduct.id === child_product.id
                                ? { ...prevChildProduct, discount: e.target.value }
                                : prevChildProduct
                          ),
                        }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
            price after discount
            </Label>
            <Input
               id={`${child_product.id}-price-after-discount`}
              value={parseInt(child_product.orginal_price) - parseInt(child_product.orginal_price * child_product.discount/100)}
              className="col-span-3"
              disabled
            />
          </div>

          {!child_product.unit && 
           
           <div className="text-sm text-red-500 text-center mb-2">pelase add your product variatiion</div>

           }   
          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
           variation
            </Label>
            <Input
               id={`${child_product.id}-variation`}
               value={child_product.unit}
               onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? {
                          ...prevProduct,
                          child_product: prevProduct.child_product.map(
                            (prevChildProduct) =>
                              prevChildProduct.id === child_product.id
                                ? { ...prevChildProduct, unit: e.target.value }
                                : prevChildProduct
                          ),
                        }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4  mb-2">
            <Label htmlFor="name" className="text-right">
           quantity
            </Label>
            <Input
               id={`${child_product.id}-quantity`}
               value={child_product.quantity}
               onChange={(e) =>
                setVariation((prevVariation) =>
                  prevVariation.map((prevProduct) =>
                    prevProduct.id === product.id
                      ? {
                          ...prevProduct,
                          child_product: prevProduct.child_product.map(
                            (prevChildProduct) =>
                              prevChildProduct.id === child_product.id
                                ? { ...prevChildProduct, quantity: e.target.value }
                                : prevChildProduct
                          ),
                        }
                      : prevProduct
                  )
                )
              }
              className="col-span-3"
            />
          </div>


            <div className="flex items-center space-x-2  mb-2">
            <Checkbox  id={`${child_product.id}-stock`} />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                out of stock
            </label>
            </div>

           
            { child_product.parent_images.length == 0 && 
            <div className="text-sm text-red-500 text-center mb-2">pelase upload your product picture</div>
            }


            <div className="flex flex-wrap space-y-1.5 space-x-2  mb-2">
               
               <div className="w-20 h-20 border-dotted border-2 border-orange-300 rounded-lg text-center cursor-pointer"  id={child_product.id} onClick={() => ImgRef.current[child_product.id].click()}  >upload Image</div>
              
             

                <input type="file"  ref={(ref) => (ImgRef.current[child_product.id] = ref)} id={child_product.id}  name="imageUpload" accept="image/jpeg, image/png, image/webp, .jpg, .png, .jpeg, .webp" className="hidden" onChange={(event) => handleFileSelect(event,child_product.id,false)}/>
                   
               { child_product.parent_images.map((img)=>(
                <div key={img.id} className="flex flex-wrap space-x-1">
                    {img.image ? (<>
                        <img   src={img.image} className="h-20 w-20 rounded-lg"/>
                     <AiFillCloseCircle size={18} color="black" className="absolute bg-white cursor-pointer"  onClick={() => {
                            handleDeleteImage(img.id,child_product.id);
                          }}
                        />
                    </>):<>
                    <img   src={img.preview_url} className="h-20 w-20 rounded-lg"/>
                     <AiFillCloseCircle size={18} color="black" className="absolute bg-white cursor-pointer"  onClick={() => {
                            handleDeleteImage(img.id,child_product.id);
                          }}
                        />
                    </>}
                  
                        
            
                        
                       
               </div>
                 
               
               ))
               }
                  
              
               

            </div>

            <Button className='bg-red-500 hover:bg-red-600 text-white mb-2' onClick={()=>handleDeleteVariation(child_product.id,false)} >Delete Variation</Button>


            </div>
            
            </div>
          ))}
             
             </>
            </div>
            
          ))}


         

    
        <DialogFooter>
          {ErrMsg}
            {Variation.length !== 0 && 
                       <Button onClick={handleSubmit} type="submit">Save changes</Button>

            }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
