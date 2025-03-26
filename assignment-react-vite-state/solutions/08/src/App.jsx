import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function Search(props) {
  let [gifs, setGifs] = useState([]);
  useEffect(() => {
    const myFetch = async (url) => {
      const hr = await axios.get(url);
      let json = hr.data;
      json = json.data.map((item) => item.images.original_mp4);
      setGifs(json);
    };
    myFetch(
      `https://api.giphy.com/v1/gifs/search?api_key=<INSERT API KEY HERE>&q=${props.keyword}&limit=5&offset=${props.offset}&rating=pg-13&lang=en`
    );
  }, [props.keyword, props.offset]);
  return (
    <>
      {gifs.map((item) => (
        <>
          <video
            key={item.mp4}
            src={item.mp4}
            loop={true}
            autoPlay={true}
            width="200"
          />
          <br />
        </>
      ))}
    </>
  );
}

function App() {
  let [searchKeyword, setSearchKeyword] = useState("");
  let [input, setUserInput] = useState("");
  let [offset, setOffset] = useState(0);
  return (
    <>
      <h1>Giphy</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOffset(0);
          setSearchKeyword(input);
        }}
      >
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="search"
        />
        <button type="submit">Search</button>
      </form>
      <button disabled={offset === 0} onClick={() => setOffset(offset - 5)}>
        {"<"}
      </button>
      {offset}
      <button onClick={() => setOffset(offset + 5)}>{">"}</button>
      <br />
      <Search keyword={searchKeyword} offset={offset} />
    </>
  );
}

export default App;
