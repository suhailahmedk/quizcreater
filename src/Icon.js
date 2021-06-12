import React from "react";
import {  BsCheck,BsX } from "react-icons/bs"
const Icon = ({ value }) => {
    if (value === false) {
        return (
            
            <div className="text-danger text-center"><BsX></BsX></div>
        )
    }
    else {
        return (
            <div className="text-success text-center"><BsCheck></BsCheck></div>
        )
    }


}
export default Icon;