import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_CURRENT_LOCATION } from "../../redux/settingReducer";
import options from "./options";
import './style.css'

function Select (props) {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    function SubmitHendler(event) {
        event.preventDefault()
        setValue('')
      }


      
    function SubmitLocation (downValue,value) {
        
        if(downValue === undefined){
            dispatch({
                    type: CHANGE_CURRENT_LOCATION,
                    data: {
                    currentLocation: value,
                    }
                }) 
        } else {
            dispatch({
                type: CHANGE_CURRENT_LOCATION,
                data: {
                currentLocation: downValue,
                }
            }) 
        }
    }

    const filterOptions = () => {
        return options.filter(
            e => e.toLowerCase().indexOf(value.toLowerCase()) !== -1 
        ).map(  item => {
                    return <li 
                        key={item} 
                        onClick={() => changeInputValue(item)}
                    >{item}</li>
                }
            )   
    }

    function changeInputValue(downValue, value) {
        SubmitLocation(downValue, value)
    }
// console.log(changeInputValue())



    return (
        <div className="wrap">
            <div className="select">
                <div className="select_input"> 
                    <form onSubmit={SubmitHendler}>
                        <input 
                            type='text' 
                            placeholder="Введите название или выберите из списка" 
                            value={value}
                            onChange={ event =>setValue(event.target.value)} 
                        />
                    <button 
                        type='submit' 
                        onClick={SubmitLocation(value)} 
                        />
                    </form> 
                </div>
                <div  className={value !== '' ? 'open' : 'select_down'} >
                    <ul>
                        {
                         filterOptions()
                        }
                    </ul>
                </div>    
            </div>
        </div>
    )
}

export default Select