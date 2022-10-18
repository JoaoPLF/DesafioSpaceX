import { routes } from "../../utils/routes";
import rocket from "../../assets/rocket.svg";

import HeaderButton from "./HeaderButton";

import "./Header.css";

const Header = ({ route, setRoute }) => {
  const handleClick = (newRoute) => {
    if (newRoute !== route) setRoute(newRoute);
  }

  return (
    <header className="header">
      <img src={rocket} alt="SpaceX Tracker" width="48px" height="48px" className="rocket" />
      <HeaderButton active={route === routes.LATEST} titulo="Último Lançamento" onClick={() => handleClick(routes.LATEST)} />
      <HeaderButton active={route === routes.NEXT} titulo="Próximo Lançamento" onClick={() => handleClick(routes.NEXT)} />
      <HeaderButton active={route === routes.PAST} titulo="Lançamentos Passados" onClick={() => handleClick(routes.PAST)} />
      <HeaderButton active={route === routes.UPCOMING} titulo="Próximos Lançamentos" onClick={() => handleClick(routes.UPCOMING)} />
    </header>
  );
};

export default Header;