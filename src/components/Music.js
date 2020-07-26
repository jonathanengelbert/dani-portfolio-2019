import React from "react";

// SONG SAMPLES
import nonsense from '../assets/audio/nonsense.mp3';
import veryLastDrop from '../assets/audio/very-last-drop.mp3';
import lightMeUp from '../assets/audio/light-me-up.mp3';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.progressBar = React.createRef();
        this.state = {
            tracks: [
                {
                    id: 1,
                    title: "Nonsense in Emaj",
                    src: nonsense,
                    length: "2:21",
                    type: "sample"
                },
                {
                    id: 2,
                    title: "Light me Up",
                    src: lightMeUp,
                    length: "1:37",
                    type: "sample"
                },
                {
                    id: 3,
                    title: "Very Last Drop",
                    src: veryLastDrop,
                    length: "0:59",
                    type: "sample"
                },

                {
                    id: 4,
                    title: "I let myself feel all the time",
                    src: "/audio/i-let-myself-feel-all-the-time.mp3",
                    length: "2:00",
                    type: "song"
                }
            ],

            currentId: null,
            currentTitle: null,
            currentSrc: null,
            currentTime: 0,
            displayTime: '0:00',
            duration: null,
            playing: false,
            tracker: 10
        };
    }

    play() {
        if (!this.audio.src) {
            const currentTrack = this.state.tracks[0];
            const {id, title, src} = currentTrack;
            this.setState({
                currentId: id,
                currentTitle: title,
                currentSrc: src
            }, this.setState({playing: !this.audio.paused}));
            return
        }
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }

        this.setState({playing: !this.audio.paused});
    }

    updateTime(time) {
        const timeFloored = Math.floor(time);
        let minutes = Math.floor(timeFloored / 60);
        let seconds = timeFloored % 60;

        this.setState({currentTime: timeFloored});

        if (seconds < 10) {
            this.setState({displayTime: `${minutes}:0${seconds}`});
        } else {
            this.setState({displayTime: `${minutes}:${seconds}`});
        }
    }

    getDuration(time) {
        this.setState({duration: time});
    }

    selectTrack(e) {
        const targetTitle = e.target.innerHTML.substr(
            0,
            e.target.innerHTML.indexOf("<")
        );

        const currentTrack = this.state.tracks.filter(t => {
            return t.title === targetTitle;
        })[0];

        const {id, title, src} = currentTrack;
        this.setState({
            currentId: id,
            currentTitle: title,
            currentSrc: src
        });
    }

    handleTrackEnded() {
        this.setState({playing: false});
    }

    handleProgressBarClick(e) {  // EVENT HERE IS THE LOCATION CLICKED ON THE BAR
        // var percent = event.offsetX / this.offsetWidth;
        // player.currentTime = percent * player.duration;
        // progressbar.value = percent / 100;
        if (this.state.duration){
            const percent = e.nativeEvent.offsetX / this.progressBar.current.offsetWidth;
            this.audio.currentTime =  percent * this.state.duration;
        }
    }


    componentDidMount() {
        this.audio.addEventListener("timeupdate", () => {
            if (this.audio) {
                this.updateTime(this.audio.currentTime);
            }
        });

        this.audio.addEventListener("ended", () => {
            this.handleTrackEnded();
        });

        this.audio.onloadedmetadata = () => this.getDuration(this.audio.duration);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentTitle !== this.state.currentTitle) {
            this.play();
        }
    }

    render() {
        /*PROGRESS BAR ---------------------------------------------*/
        const ProgressBar = props => {

            return (
                <div
                    className="progress-bar"
                    ref={this.progressBar}
                    onClick={e => this.handleProgressBarClick(e)}
                >
                    <Filler/>
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
        const sampleList = this.state.tracks
            .filter(t => t.type === "sample")
            .map(t => {
                return (
                    <li
                        key={t.id}
                        onClick={e => this.selectTrack(e)}
                        className={t.title === this.state.currentTitle ? "active" : null}
                    >
                        {t.title}
                        <span className={"length"}> {t.length}</span>
                        <hr/>
                    </li>
                );
            });
        // const songList = this.state.tracks
        //   .filter(t => t.type === "song")
        //   .map(t => {
        //     return (
        //       <li
        //         key={t.id}
        //         onClick={e => this.selectTrack(e)}
        //         className={t.title === this.state.currentTitle ? "active" : null}
        //       >
        //         {t.title}
        //         <span className={"length"}> {t.length}</span>
        //         <hr />
        //       </li>
        //     );
        //   });
        return (
            <>
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
                        <ProgressBar/>
                        <p>{` ${this.state.displayTime}`}</p>
                    </div>

                    {/* {this.state.children} */}
                </div>
                <div className={"track-list"}>
                    <ul>
                        <span>SONG SAMPLES</span>
                        {sampleList}
                    </ul>

                    {/*<ul>*/}
                    {/*  <span>VOCAL WORKS</span>*/}
                    {/*  {songList}*/}
                    {/*</ul>*/}
                </div>
            </>
        );
    }
}

class Music extends React.Component {
    render() {
        /*TRACK LIST---------------------------------------------*/

        return (
            <div id={"music"}>
                <Player/>
            </div>
        );
    }
}

export default Music;
