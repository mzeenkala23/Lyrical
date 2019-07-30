import React from 'react'
import classes from './Tracks.module.css'
import TrackItem from './TrackItem/TrackItem'

function Tracks(props){
    
    const tracks= props.tracks.map(item => {
        return <TrackItem key={item.track.track_id} name={item.track.track_name}
                        artist={item.track.artist_name}
                        id={item.track.track_id}/>
    });
    
    return(
        <div className={classes.Tracks}>
            {tracks}
        </div>   
    )
}

export default Tracks