import React, {Component} from 'react'
import classes from './LyricPage.module.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class LyricPage extends Component{
    state={
        Loading:false,
        Lyrics:'',
        Artist:'',
        TrackName:''
    }
    
    componentDidMount(){
        this.setState({
            Loading:true
        })
        const title=this.props.location.state.TrackName
        const artist=this.props.location.state.Artist

        axios( `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=28958eed3d9049dbe0bba4c3111e51ea`).then(res=>{
    
            let lyrics;
            if(res.data.message.body.length===0 || !res.data.message.body.lyrics.lyrics_body ){
                lyrics ='sorry no lyrics'
            }else{
                lyrics=res.data.message.body.lyrics.lyrics_body
            }
            this.setState({
                Loading:false,
                Lyrics:lyrics,
                Artist:artist,
                TrackName:title
            })
        })
        .catch(e=>console.log(e))
    }
    
    render(){
         console.log(classes)
    
        return(
            <div className={classes.LyricPage}>
               
                <div className={classes.content} >   
                    <div className={classes.HeaderWrapper} >
                        <span>{this.state.TrackName} By:</span> <h1>{this.state.Artist} </h1> 
                    </div>
                    <p>{`" ${this.state.Lyrics} "`} </p>
                    <div className={classes.button}>
                        <Link to='/'>
                            <button> Go Back </button>
                        </Link>    
                    </div> 
                </div>
            </div>    
        )
    }
}




export default LyricPage