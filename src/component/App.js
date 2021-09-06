import React from 'react';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const KEY = 'AIzaSyDDAR6Rt-FvVgq1zrEYDm7k7xW0mByeTZ4';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount = () => {
        this.onSearchSubmit('happy');
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                key: KEY,
                part: 'snippet',
                type: 'video',
                maxResults: 5
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onSearchSubmit} />
                <div class="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;