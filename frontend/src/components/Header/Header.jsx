import { rotas } from "../../utils/rotas";
import rocket from "../../assets/rocket.svg";

import HeaderButton from "./HeaderButton";

import "./Header.css";

const Header = ({ rota, setRota }) => {
  const handleClick = (novaRota) => {
    if (novaRota !== rota) setRota(novaRota);
  }

  return (
    <header className="header">
      <img src={rocket} alt="SpaceX Tracker" width="48px" height="48px" className="rocket" />
      <HeaderButton active={rota === rotas.LATEST} titulo="Último Lançamento" onClick={() => handleClick(rotas.LATEST)} />
      <HeaderButton active={rota === rotas.NEXT} titulo="Próximo Lançamento" onClick={() => handleClick(rotas.NEXT)} />
      <HeaderButton active={rota === rotas.PAST} titulo="Lançamentos Passados" onClick={() => handleClick(rotas.PAST)} />
      <HeaderButton active={rota === rotas.UPCOMING} titulo="Próximos Lançamentos" onClick={() => handleClick(rotas.UPCOMING)} />
    </header>
  );
};

export default Header;