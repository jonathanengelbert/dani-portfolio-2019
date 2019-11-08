import React from 'react';
import ReactPlayer from 'react-player';

class Videos extends React.Component {
  state = {
    tracks : [ 
      { 
        label: 'The Duveteur',
        url: 'https://vimeo.com/355403700',
        attribution: 'Video by Peter Dolshun'
      },
      {
        label: 'Obvious Magazine',
        url: './videos/obvious-magazine.mov'
      },
      {
        label: 'TREsemme',
        url: './videos/tresemme.m4v'
      },
            { 
        label: 'Open Your Eyes Sunnies Kickstarter',
        url: 'https://www.youtube.com/watch?v=9xR5ubMPYL8', 
        attribution: 'Video by Atlee Feingold'
      },
    ],
  }

  load = url => {
    this.setState({
      url,  
      playing: true,
      // played: 0,
      // loaded: 0,
    });
  }

  buildPlaylist() {
    const tracks = this.state.tracks.slice();
    return(
      <div className={'playlist'}>
        <ul>
          {tracks.map(t => 
          <li key={t.label} onClick={() => this.load(t.url)}>{t.label}</li>
          )}
        </ul>
      </div>
    );
  }

  render(){ 
    return (
      <div id='videos' className='section'>
        <section>
          <ReactPlayer 
            light={true}
            className='react-player'
            url={this.state.url ? this.state.url : this.state.tracks[0].url} 
            controls={true}
            playing={true} 
            width='50%'
            height='100%'
          />
      
        {this.buildPlaylist()}
        </section>
      </div>
    )
  }
}

export default Videos;
