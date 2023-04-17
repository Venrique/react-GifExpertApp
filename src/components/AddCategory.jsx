import {useState} from "react";

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('One Punch');

    //Al no poner nada en el onChange automáticamente se manda como parámetro 'event'
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        if (inputValue.trim().length < 1) return;

        props.setNewCategories(inputValue);
        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange}/>
        </form>
    )
}