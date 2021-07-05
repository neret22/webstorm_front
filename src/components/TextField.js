import React from 'react'

const TextField = ({label, id, error, ...rest}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="text" className="form-control" id={id} placeholder={label} {...rest}/>
            {error && <p class="alert alert-warning" role="alert">{error}</p>}
        </div>
    )
}

export default TextField;