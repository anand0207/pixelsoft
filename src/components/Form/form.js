import React, { useState, useContext, useEffect } from 'react'
import { Input, Select, Radio } from './formcomponents'

import { MyContext } from './formcontexts'

const FormComponent = () => {
    const { samplejson } = useContext(MyContext)
    const [showerrors , setshowerrors] = useState(false)
    
    console.log(samplejson)
     const formsubmit =(e) =>{
        e.preventDefault();
        console.log(samplejson)
        samplejson.fields.map((field) =>{
            if(field.validations.nullable ){
                setshowerrors(true)
                setTimeout(() =>{
                    setshowerrors(false)
                },3000)
            }else{
                alert(field.label +" --> "+  field.value)
            }
        })
         
     }
    
    return (
        <div className='container'>
            <form id="form">
                <h3>{samplejson.formHeading}</h3>
                {
                    samplejson.fields.map((field) =>
                        field.type == "select" ? <>
                            <Select field={field} />
                            
                            {
                                field.validations.nullable == true && showerrors?   <p style={{"color":'red'}}>*Please Select {field.label}</p> : null
                            }
                           
                            </> : field.type == "radio" ? <>
                                <Radio field={field} />
                                {
                                    field.validations.nullable == true && showerrors?  <p style={{"color":'red'}}>*Please Choose the {field.label}</p> : null
                                }
                                
                                </> : <>
                            <Input field={field} />
                            {
                                field.validations.nullable == true && showerrors ? <p style={{"color":'red'}}>*Please Enter your {field.label}</p> : null
                            }
                            </>
                    )
                }
                <button className='btn btn-primary' onClick= {e => formsubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent