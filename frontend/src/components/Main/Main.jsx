import { useState } from "react";

import Spinner from "../Spinner/Spinner";
import LaunchInfo from "./LaunchInfo";

import "./Main.css"

const Main = ({ data }) => {
  const [dataIndex, setDataIndex] = useState(0);

  let component = null;

  if (data && !data.error) {
    if (Array.isArray(data)) {
      component = (
        <>
          <label htmlFor="flightSelect" className="label">Nº do vôo: </label>
          <select id="flightSelect" className="select" value={dataIndex} onChange={(e) => setDataIndex(e.target.value)}>
            {data.map((d, index) => (<option key={index} value={index}>{d.flight_number}</option>))}
          </select>
          <LaunchInfo data={data[dataIndex]} />
        </>
      );
    }
    else {
      component = (
        <LaunchInfo data={data} />
      );
    }
  }

  return (
    <div className="main">
      {data ?
        (data.error ?
          (<div className="error">
            Não foi possível obter os dados do lançamento.
          </div>) :
          (component)
        ) :
        <Spinner />}
    </div>
  );
};

export default Main;