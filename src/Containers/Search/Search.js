import React, { Component } from 'react'
import Form from '../../Components/Form/Form'
import axios from 'axios';
import Tracks from '../../Components/Tracks/Tracks'
import Loader from '../../Components/Loader/Loader'


class Search extends Component{
    state={
        trackList:[],
        title:'',
        searchInput:'',
        loading:false,
        buttonDisabled:true
    }



    onchangeHandler=(e)=>{
        const input=e.target.value;
        this.setState({searchInput:input})
        
    }

    //Get requeuest to the API



    getSongs=async()=>{
        const query=this.state.searchInput
        this.setState({loading:true})
        try{
            
        const req = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&apikey=28958eed3d9049dbe0bba4c3111e51ea`)

        const tracks=req.data.message.body.track_list
        this.setState({trackList:tracks, loading:false
        })
        // console.log(this.state.trackList[0].track.track_id)
        // console.log(this.state.trackList[0].track)
        localStorage.setItem('songs',JSON.stringify(tracks))

        }catch(e){
            console.log(e)
            
        }

    }

    onSubmitHandler=(e)=>{
        e.preventDefault()
        this.getSongs();
        
        this.setState({searchInput:''})
    }

    render(){
        
        let DOMrender=null;

            if(this.state.loading){
                DOMrender=<Loader/>
            }

            // const storage=localStorage.getItem('songs')
            // if(storage){
            //     this.setState({trackList:storage});
            // }    
        return(
            <React.Fragment >
                <Form change={this.onchangeHandler} value={this.state.searchInput} submit={this.onSubmitHandler}/>
                <Tracks tracks={this.state.trackList} />
                {DOMrender}
            </React.Fragment>    

        )
    }
}

export default Search 

