"use client"
import React from "react";
import {useState} from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody
} from "@material-tailwind/react";
 

interface Props{
    name?:string,
    description:string,
    price?:number,
    image?:string,
}

export const CardComponent:React.FC<Props>=({
    description
 
})=>{
    
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(cur => !cur);
 
return (
 
<React.Fragment>
  <Button style={{backgroundColor:"green",marginLeft:"8px",marginBottom:"8px"}} onClick={toggleOpen}><h3>read Details</h3></Button>
  <Collapse open={open}>
    <Card className="my-4 mx-auto w-8/12">
      <CardBody>
        <Typography>
            {description}
        </Typography>
      </CardBody>
    </Card>
  </Collapse>
</React.Fragment>
) }