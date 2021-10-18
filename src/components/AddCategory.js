import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //Undefined si no se pone las comillas
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();        
        if(inputValue.trim().length > 2){
            setCategories(cate => [inputValue, ...cate]); //cate hace referencia al contenido del componente  
            setInputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>            
            <input
                type="text"
                value = {inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}