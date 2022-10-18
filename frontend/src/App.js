import { useState, useEffect } from "react";
import { rotas } from "./utils/rotas";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [rota, setRota] = useState(rotas.LATEST);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(`${process.env.REACT_APP_API_URL}/${rota}`);
        const resultJson = await result.json();
        setData(resultJson);
      }
      catch (err) {
        setData({ error: true });
      }
    })();
  }, [rota]);

  return (
    <div className="App">
      <Header rota={rota} setRota={setRota} />
      <Main data={data} />
    </div>
  );
}

export default App;
