import React from "react";
import { useSelector } from "react-redux";

function Sound() {
  const data = useSelector((state) => state.fetchData.data);
  let state = {
    word: "hello",
    url: "",
  };

  if (data) {
    state = {
      word: data.word,
      url: data[0].phonetics[0].audio,
    };
  }

  const audio = new Audio(state.url);
  audio.loop = false;

  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const toggle = () => setPlaying(!playing);
  console.log(state.url);
  React.useEffect(() => {
    console.log(audioRef.current);
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);
  return (
    <div className="w-full my-6 flex flex-row justify-between">
      <div>
        <h2 className="text-2xl font-bold">{state.word}</h2>
        <p className="text-xl">Pronounce</p>
      </div>
      <div>
        <audio className="w-full" ref={audioRef} muted>
          <source src={state.url} type="audio/ogg" />
        </audio>
        <button
          onClick={() => {
            audio.play();
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

export default Sound;
