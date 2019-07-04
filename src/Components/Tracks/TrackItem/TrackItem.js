import React from 'react'
import classes from './TrackItem.module.css'
import {Link} from 'react-router-dom'

function TrackItem(props){
    return(
        <div className={classes.TrackItem}>
            <h1>{props.name} </h1>  <span>By {props.artist} </span>
            
            <Link to={{
                pathname:`/songs-lyrics/${props.id}`,
                state:{
                    TrackName: props.name,
                    Artist:props.artist
                }
            }}>
                <button> Get lyrics </button>
            </Link>
        </div>
    )
}


export default TrackItem