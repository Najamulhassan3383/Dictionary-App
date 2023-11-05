import React from "react";
import { useSelector } from "react-redux";

function Sound() {
  const data = useSelector((state) => state.fetchData.data);
  let audio_src;
  let word;
  let text;
  if (data) {
    for (let i = 0; i < data[0].phonetics.length; i++) {
      if (data[0].phonetics[i].audio) {
        audio_src = data[0].phonetics[i].audio;
      }
      if (data[0].phonetics[i].text) {
        text = data[0].phonetics[i].text;
      }
      word = data[0].word;
    }
  }

  const audio = new Audio(audio_src);
  audio.loop = false;

  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const toggle = () => setPlaying(!playing);
  // console.log(state.url);
  React.useEffect(() => {
    // console.log(audioRef.current);
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);
  return (
    <div className="w-full my-6 flex flex-row justify-between">
      <div>
        <h2 className="text-6xl font-bold lowercases my-2">{word}</h2>
        <p className="text-xl">{text}</p>
      </div>
      <div>
        <audio className="w-full" ref={audioRef} muted>
          <source src={audio_src} type="audio/ogg" />
        </audio>
        <button
          onClick={() => {
            audio.play();
          }}
        >
          <img
            src="../../public/assets/icon-play.svg"
            alt="play"
            className="my-2"
          />
        </button>
      </div>
    </div>
  );
}

export default Sound;
