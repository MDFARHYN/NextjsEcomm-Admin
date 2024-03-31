import * as React from "react"

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

export default function BulkUpload() {
  return (
    <div className="flex justify-center mt-10">
              <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>upload csv</CardTitle>
        <CardDescription>click here for download sample csv</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Upload csv</Label>
              <Input type="file" id="name" placeholder="Name of your project" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button>Submit</Button>
      </CardFooter>
    </Card>
    </div>

  )
}
