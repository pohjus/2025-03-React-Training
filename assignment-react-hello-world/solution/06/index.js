const FetchIt = ({ url, library }) => {
  const fetchIt = async () => {
    try {
      if (library === "fetch") {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        console.log(result);
      } else if (library === "axios") {
        const response = await axios.get(url);
        console.log(response.data);
      } else if (library === "jquery") {
        $.ajax({
          url,
          method: "GET",
          success: (result) => console.log(result),
          error: (jqXHR) => console.error(jqXHR.statusText),
        });
      } else {
        throw new Error("Unsupported library");
      }
    } catch (err) {
      console.error(`Failed to fetch data: ${err.message}`);
    }
  };

  return <button onClick={fetchIt}>Refresh</button>;
};

Solution;

function FetchIt({ url, asyncawait }) {
  const fetchItAsync = async () => {
    console.log("ASYNC AWAIT");
    try {
      let hr = await fetch(url);
      if (!hr.ok) {
        throw new Error(`HTTP error ${hr.status}`);
      }
      let data = await hr.json();
      console.log(data);
    } catch (e) {
      console.error(`Error fetching data: ${e.message}`);
    }
  };
  const fetchItPromise = () => {
    console.log("PROMISE");
    fetch(url)
      .then((hr) => {
        if (!hr.ok) {
          throw new Error(`HTTP error ${hr.status}`);
        }
        return hr.json();
      })
      .then((data) => console.log(data))
      .catch((e) => console.error(`Error fetching data: ${e.message}`));
  };
  return (
    <button onClick={asyncawait ? fetchItAsync : fetchItPromise}>
      Refresh
    </button>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FetchIt url="https://swapi.dev/api/people/1" asyncawait={true} />);
