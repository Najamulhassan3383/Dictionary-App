import React from "react";
import { useSelector } from "react-redux";

function Sound() {
  const data = useSelector((state) => state.fetchData.data);
  let state = {
    word: "hello",
    url: "",
  };

  if (data) {
    let newurl = data[0].phonetics.filter((item) => {
      return item.audio !== "";
    });
    let text = data[0].phonetics.filter((item) => {
      console.log("from text", item.text);
      if (item.text) {
        return item;
      }
    });
    state = {
      word: data[0].word,
      url: newurl[0].audio,
      text: text[0].text,
    };
    console.log(text[0].text);
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
        <h2 className="text-6xl font-bold lowercases my-2">{state.word}</h2>
        <p className="text-xl">{state.text}</p>
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
