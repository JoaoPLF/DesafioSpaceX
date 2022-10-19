import { useEffect, useState } from "react";

import Spinner from "../Spinner/Spinner";
import LaunchInfo from "./LaunchInfo";

import "./Main.css"

const Main = ({ data }) => {
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    setDataIndex(0);
  }, [data]);

  let component = null;

  if (data && !data.error) {
    if (data.flight_number) {
      component = (
        <LaunchInfo data={data} />
      );
    }
    else {
      component = (
        <>
          <label htmlFor="flightSelect" className="label">Nº do vôo: </label>
          <select id="flightSelect" className="select" value={dataIndex} onChange={(e) => setDataIndex(e.target.value)}>
            {Object.keys(data).map((key, index) => (<option key={index} value={index}>{data[key].flight_number}</option>))}
          </select>
          <LaunchInfo data={data[dataIndex]} />
        </>
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