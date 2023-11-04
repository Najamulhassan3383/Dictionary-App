import React from "react";
import { useSelector } from "react-redux";

function Sound() {
  const data = useSelector((state) => state.fetchData.data);
  let word;
  if (!data) {
    word = "hello";
  } else {
    word = data[0].word;
  }

  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const toggle = () => setPlaying(!playing);
  React.useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);
  return (
    <div className="w-full my-6 flex flex-row justify-between">
      <div>
        <h2 className="text-2xl font-bold">{word}</h2>
        <p className="text-xl">Pronounce</p>
      </div>
      <div>
        <audio className="w-full" ref={audioRef}>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
}

export default Sound;
