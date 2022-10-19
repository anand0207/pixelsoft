import { useContext } from "react"
import { MyContext } from './formcontexts'

const Input = (props) => {
    const { samplejson, getjson } = useContext(MyContext);
    const { field } = props

    const fInupt = (e) => {
        var objIndex = samplejson.fields.findIndex((obj => obj.id == e.target.id));
        samplejson.fields[objIndex].value = e.target.value
        if(e.target.value.length > 0){
            samplejson.fields[objIndex].validations.nullable = false
        }else{
            samplejson.fields[objIndex].validations.nullable = true
        } 
        getjson(samplejson) 
    }

    return (
        <div class="form-group">
            <label for={field.id}>{field.label}</label>
            <input type={field.type}  class="form-control" id={field.id} placeholder={`Enter Your ${field.label}`} onChange={e => fInupt(e)} />
        </div>
    )
}

const Select = (props) => {
    const { samplejson, getjson } = useContext(MyContext);
    const { field } = props

    const fInupt = (e) => {
        var objIndex = samplejson.fields.findIndex((obj => obj.id == e.target.id));
        samplejson.fields[objIndex].value = e.target.value
        if(e.target.value.length > 0){
            samplejson.fields[objIndex].validations.nullable = false
        }else{
            samplejson.fields[objIndex].validations.nullable = true
        } 
        getjson(samplejson) 
    }

    return (
        <div class="form-group">
            <label for={field.id}>{field.label}</label>
            <select class="form-control" id={field.id} onChange={e => fInupt(e)} >
            <option  >{`Select Your ${field.label}`}</option>
                {
                    field.options.map((options) => <option value={options.value}>{options.label}</option>)
                }
            </select>
        </div>
    )
}

const Radio = (props) => {
    const { samplejson, getjson } = useContext(MyContext);
    const { field } = props

    const fInupt = (e) => {
        console.log(field.id)
        var objIndex = samplejson.fields.findIndex((obj => obj.id == field.id));
        samplejson.fields[objIndex].value = e.target.value
        if(e.target.value.length > 0){
            samplejson.fields[objIndex].validations.nullable = false
        }else{
            samplejson.fields[objIndex].validations.nullable = true
        } 
        getjson(samplejson) 
    }

    return (
        <div class="form-group">
            <label for={field.id}>{field.label}</label>
            {
                field.options.map((options) =>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name={field.id} id={options.value} value={options.value} onChange={e => fInupt(e)}  />
                        <label class="form-check-label" for={options.value}>
                            {options.label}
                        </label>
                    </div>
                )
            }

        </div>
    )
}



export { Input, Select, Radio }