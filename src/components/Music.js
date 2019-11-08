import React from "react";

class Player extends React.Component {
  componentDidMount() {
    this.audio.addEventListener("timeupdate", () => {
      if (this.audio) {
        this.props.updateTime(this.audio.currentTime);
      }
    });

    this.audio.onloadedmetadata = () =>
      this.props.getDuration(this.audio.duration);
  }

  render() {
    return (
      <div className={"player"}>
        <audio
          ref={ref => (this.audio = ref)}
          src={this.props.currentSrc}
        ></audio>

        <button
          // onClick={() => this.props.play(this.audio)}
          onClick={() => this.props.play(this.audio)}
          id={"play-pause-button"}
          className={this.props.playing ? "play-button paused" : "play-button"}
        ></button>
        {this.props.children}
      </div>
    );
  }
}

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.play = this.play.bind(this);

    this.state = {
      tracks: [
        { id: 1, title: "Sample", src: "/audio/sample.mp3" },
        { id: 2, title: "Cello", src: "/audio/cello.mp3" }
      ],

      currentId: null,
      currentTitle: null,
      currentSrc: null,
      currentTime: 0,
      duration: null,
      playing: false,
      tracker: 10
    };
  }

  play(audioRef) {
    if (audioRef.paused) {
      audioRef.play();
    } else {
      audioRef.pause();
    }

    this.setState({ playing: !audioRef.paused });
  }

  updateTime(time) {
    const currentTime = time;
    this.setState({ currentTime: currentTime });
  }

  getDuration(time) {
    const duration = time;
    this.setState({ duration: duration });
  }

  selectTrack(e) {
    const currentTrack = this.state.tracks.filter(t => {
      return t.title === e.target.innerHTML;
    })[0];

    const status =
      currentTrack.title === this.state.currentTitle && this.state.playing
        ? true
        : false;

    const { id, title, src } = currentTrack;
    this.setState({
      currentId: id,
      currentTitle: title,
      currentSrc: src,
      playing: status
    });
  }

  componentDidMount() {
    const { id, title, src } = this.state.tracks[0];
    this.setState({
      currentId: id,
      currentTitle: title,
      currentSrc: src
    });
  }

  render() {
    /*PROGRESS BAR ---------------------------------------------*/
    const ProgressBar = props => {
      function updateFiller(){
        // console.log(this.progressBar);
         console.log(this.progressBar);

      }
      return (
        <div className="progress-bar" 
          ref={ref => this.progressBar = ref}
          onClick={(e) => updateFiller()}
          >
          <Filler />
        </div>
      );
    };
   
    const Filler = props => {
      return (
        <div
          className="filler"
          style={{
            width: (this.state.currentTime / this.state.duration) * 100 + "%"
          }}
        />
      );
    };

    /*TRACK LIST---------------------------------------------*/

    const trackList = this.state.tracks.map(t => {
      return (
        <li
          key={t.id}
          onClick={e => this.selectTrack(e)}
          className={t.title === this.state.currentTitle ? "active" : null}
        >
          {t.title}
        </li>
      );
    });

    return (
      <div id={"music"}>
        <Player
          currentSrc={this.state.currentSrc}
          play={this.play}
          updateTime={this.updateTime}
          getDuration={this.getDuration}
          playing={this.state.playing}
        >
          <ProgressBar />
          <p>
            {Math.floor(this.state.currentTime)}:
            {Math.floor(this.state.duration)}
          </p>
        </Player>
        <ul>{trackList}</ul>
      </div>
    );
  }
}

export default Music;
