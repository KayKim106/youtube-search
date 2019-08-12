import React from 'react';

import Youtube from '../apis/youtube'
//Components
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    
    state = {
        videos : [],
        selectedVideo:null,
    }

    onTermSubmit = async term => {
       const response = await Youtube.get('/search',{
            params:{
                q: term,
            }
        })
        this.setState({ 
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        })
    }
    onVideoSelect = video => {
        this.setState({  selectedVideo : video})
    }

    componentDidMount(){
        this.onTermSubmit('reactjs')
    }

    render(){
      
        return(
            <div className="ui container" style={{ marginTop:"20px" }}>
                <SearchBar onFormSubmit = { this.onTermSubmit } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video = { this.state.selectedVideo }/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            videos = { this.state.videos }
                            onVideoSelect = { this.onVideoSelect }/>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
export default App;