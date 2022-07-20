import React, { useState } from "react";
import options from "./options";
import './style.css'

function Select () {
    const [value, setValue] = useState('')

    function SubmitHendler(event) {
        event.preventDefault()
        
        setValue('')
      }


      
 function SubmitLocation (value) {
  
 }

 const filterOptions = () => {
    return options.filter(
        e => e.toLowerCase().indexOf(value.toLowerCase()) !== -1 ).map(
            item => { 
                return <li 
                    key={item} 
                    onClick={() => changeInputValue(item)}
                > {item}</li> }
        )
  }

function changeInputValue(downValue) {
   console.log(downValue)
}
console.log(changeInputValue())



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
                    {/* <button 
                        type='submit' 
                        onClick={SubmitLocation} 
                        /> */}
                    </form> 
                </div>
                <div  className={value === '' ? 'select_down' : 'open'}>
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