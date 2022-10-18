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
          <select className="select" value={dataIndex} onChange={(e) => setDataIndex(e.target.value)}>
            {data.map((d, index) => (<option value={index}>{index + 1}</option>))}
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