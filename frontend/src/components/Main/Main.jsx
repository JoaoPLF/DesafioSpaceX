import "./Main.css"

const Main = ({ data }) => {
  let component = null;
  console.log(data)

  if (data) {
    if (data.error) {
      component = (
        <div className="error">
          Não foi possível obter os dados do lançamento.
        </div>
      );
    }
    else {
      component = (
        <img src={data.links.patch.small} alt="Patch icon" />
      );
    }
  }

  if (data) {
    return (
      <div className="main">
        {component}
      </div>
    );
  }
};

export default Main;