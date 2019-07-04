import React from 'react'
import classes from './Form.module.css'


function Form(props){
    return(
        <div className={classes.Form}>
            <form onSubmit={props.submit}>
                <input name='song' value={props.value} placeholder='Search Song...' type='text' onChange={props.change} />   
                <button type='submit'>Search Songs</button>
            </form>    
        </div>
    )
}


export default Form;