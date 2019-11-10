import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          id: 1,
          title: "Ring",
          src: "/audio/ring.mp3",
          length: "1:47",
          type: "sample"
        },
        {
          id: 2,
          title: "Very Last Drop",
          src: "/audio/very-last-drop.mp3",
          length: "0:59",
          type: "sample"
        },
        {
          id: 3,
          title: "Nonsense in Emaj",
          src: "/audio/nonsense.mp3",
          length: "2:21",
          type: "sample"
        },
        {
          id: 4,
          title: "I let myself fell all the time",
          src: "/audio/i-let-myself-feel-all-the-time.mp3",
          length: "2:21",
          type: "song"
        },
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

  play() {
    console.log(this.audio.src);
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }

    this.setState({ playing: !this.audio.paused });
  }

  updateTime(time) {
    const currentTime = time;
    this.setState({ currentTime: Math.floor(currentTime) });
  }

  getDuration(time) {
    const duration = time;
    this.setState({ duration: duration });
  }

  selectTrack(e) {
    const currentTrack = this.state.tracks.filter(t => {
      console.log(e.target);
      return t.title === e.target.innerHTML;
    })[0];

    console.log(this.state.currentTitle);
    console.log(currentTrack);

    const { id, title, src } = currentTrack;
    this.setState({
      currentId: id,
      currentTitle: title,
      currentSrc: src
    });
  }

  componentDidMount() {
    this.audio.addEventListener("timeupdate", () => {
      if (this.audio) {
        this.updateTime(this.audio.currentTime);
      }
    });

    this.audio.onloadedmetadata = () => this.getDuration(this.audio.duration);

    const { id, title, src } = this.state.tracks[0];
    this.setState({
      currentId: id,
      currentTitle: title,
      currentSrc: src
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentTitle !== this.state.currentTitle &&
      this.state.playing
    ) {
      console.log(this.state.playing);
      this.play();
    }
  }

  render() {
    /*PROGRESS BAR ---------------------------------------------*/
    const ProgressBar = props => {
      function updateFiller(e) {
        console.log(e.nativeEvent.offsetX);
      }
      return (
        <div
          className="progress-bar"
          // ref={ref => (this.progressBar = ref)}
          onClick={e => updateFiller(e)}
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
    const sampleList = this.state.tracks.map(t => {
      if (t.type === "sample") {
        return (
          <li
            key={t.id}
            onClick={e => this.selectTrack(e)}
            className={t.title === this.state.currentTitle ? "active" : null}
          >
            {t.title}
          </li>
        );
      }
    });
    const songList = this.state.tracks.map(t => {
      if (t.type === "song") {
        return (
          <li
            key={t.id}
            onClick={e => this.selectTrack(e)}
            className={t.title === this.state.currentTitle ? "active" : null}
          >
            {t.title}
          </li>
        );
      }
    });
    return (
      <div>
        <div className={"player"}>
          <audio
            ref={ref => (this.audio = ref)}
            src={this.state.currentSrc}
          ></audio>
          <div className={"controls"}>
            <button
              onClick={() => this.play()}
              id={"play-pause-button"}
              className={
                this.state.playing ? "play-button paused" : "play-button"
              }
            ></button>
            <ProgressBar />
            <p>{` ${'0:00' + this.state.currentTime}`}</p>
          </div>

          {/* {this.state.children} */}
        </div>
        <div className={"track-list"}>
          <ul>
            <span>Song Samples</span>
            {sampleList}
          
          </ul>
          <hr />
          <ul>
            <span>Vocal Works</span>
            {songList}
          </ul>
        </div>
      </div>
    );
  }
}

class Music extends React.Component {
  render() {
    /*TRACK LIST---------------------------------------------*/

    return (
      <div id={"music"}>
        <Player />
      </div>
    );
  }
}

export default Music;
