import React from 'react';

import './form-input.styles.scss';


const FormInput = ({ handleChange, label, ...otherProps}) => (
<div className='group'>
    <input className= 'form-input' onChange={handleChange} {...otherProps} />
    {
        label ?
        (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}> 
        {label}          
        </label>
        )
        :
        null
        // this means...if developer wants to pass in a label property
        // then we will generate one, and if w don't, then, there is no need to generate it
        // name of class is 'shrink', not to get confused
        // this label will always have the className 'form-input-label', but we will also add this 'shrink'
        // whenever user has typed anything in
    }
</div>
);

export default FormInput;