import { useState, useEffect } from "react";
import { routes } from "./utils/routes";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [route, setRoute] = useState(routes.LATEST);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(`${process.env.REACT_APP_API_URL}/${route}`);
        const resultJson = await result.json();
        setData(resultJson);
      }
      catch (err) {
        setData({ error: true });
      }
    })();
  }, [route]);

  return (
    <div className="App">
      <Header route={route} setRoute={setRoute} />
      <Main data={data} />
    </div>
  );
}

export default App;
