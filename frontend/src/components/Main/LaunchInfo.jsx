import "./Main.css";

const LaunchInfo = ({ data }) => {
  return (
    <div className="info">
      <div className="img">
        <img src={data?.links?.patch?.small} alt="Sem ícone" />
      </div>
      <div>
        <div className="text">Nome: {data.name}</div>
        <div className="text">Data do Lançamento: {new Date(data.date_local).toDateString()}</div>
        <div className="text">Número do vôo: {data.flight_number}</div>
      </div>
    </div>
  );
};

export default LaunchInfo;