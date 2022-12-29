//#inputيامنير ده علشان  كل ال
import React from'react';

function Input({label,type="text",inputName,data,handleChange,...rest}){
    return (
            <div className="AM">
                <label className="form-label">{label}</label>
                <input
                    type={type}
                    className="form-control"
                    name={inputName}
                    placeholder={label}
                    value={data[inputName]}
                    onChange={handleChange}
                    {...rest} />

</div>
);
 } 
 export default Input;