import React from 'react'
import PropTypes,{array} from "prop-types"

export const Input = ({label,id,name,type="text",placeholder=null}) => {
  return (
    <div className='mb-3'>
        <label className='for-label' id={id}>{label}</label>
        <input className='form-control' id={id} name={name} placeholder={placeholder} type={type} />
    </div>
  )
}

Input.prototypes = {
    label : PropTypes.string,
    id : PropTypes.id,
    name : PropTypes.string,
    placeholder : PropTypes.string

}
