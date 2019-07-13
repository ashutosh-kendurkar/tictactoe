import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label, text, id, value, onChange, type})=>(
    <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input 
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
        required
        />
    </div>
);

Input.prototype={
    label:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Input;
