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
        // const result = await fetch(`https://launchtrackerforspacex.herokuapp.com/${route}`);
        const result = await fetch(`${process.env.REACT_APP_API_URL}${route}`);
        const resultJson = await result.json();
        setData(resultJson);
      }
      catch (err) {
        setData({ error: true });
      }
    })();
  }, [route]);

  const routeChangeHandler = (newRoute) => {
    if (newRoute !== route) {
      setRoute(newRoute);
      setData(null);
    }
  };

  return (
    <div className="App">
      <Header route={route} routeChangeHandler={routeChangeHandler} />
      <Main data={data} />
    </div>
  );
}

export default App;
