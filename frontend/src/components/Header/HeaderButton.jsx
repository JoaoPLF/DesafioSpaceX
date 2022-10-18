import "./Header.css";

const HeaderButton = ({ titulo, active, onClick }) => {
  return (
    <div onClick={onClick} className={`button ${active ? "active" : ""}`}>{titulo}</div>
  );
};

export default HeaderButton;