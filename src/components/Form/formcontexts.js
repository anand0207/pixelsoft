import React , {useState} from 'react'

export const MyContext = React.createContext();

const FormProvider =(props) =>{
    
  const [samplejson, getsamplejson] = useState({
    "formHeading": "Employee Form",
    "fields": [
        {
            "id": "firstname",
            "label": "First Name",
            "type": "text",
            "validations": {
                "nullable": true
            }
        },
        {
            "id": "lastname",
            "label": "Last Name",
            "type": "text",
            "validations": {
                "nullable": true
            }
        },
        {
            "id": "age",
            "label": "Age",
            "type": "number",
            "validations": {
                "nullable": true
            }
        },
        {
            "id": "gender",
            "label": "Gender",
            "type": "radio",
            "options": [
                {
                    "label": "Male",
                    "value": "male"
                },
                {
                    "label": "Female",
                    "value": "female"
                }
            ],
            "validations": {
                "nullable": true
            }
        },
        {
            "id": "email",
            "label": "Email",
            "type": "text",
            "validations": {
                "nullable": true
            }
        },
        {
            "id": "maritalStatus",
            "label": "Marita lStatus",
            "type": "select",
            "options": [
                {
                    "label": "Male",
                    "value": "male"
                },
                {
                    "label": "Female",
                    "value": "female"
                }
            ],
            "validations": {
                "nullable": true
            }
        },
        {
            "id": "address",
            "label": "Address",
            "type": "textArea",
            "validations": {
                "nullable": true
            }
        }
    ]
}
)
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);


 const getjson = (data) =>{
    forceUpdate()
    getsamplejson(data)
 }
    return(
        <MyContext.Provider value={{samplejson , getjson}}>
            {props.children}
        </MyContext.Provider>
    ) 
}


export default FormProvider