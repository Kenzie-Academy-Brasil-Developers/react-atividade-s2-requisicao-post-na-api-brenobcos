import { DivDisplay } from "./styles";
import { DisplayMsg } from "./styles";

const Display = ({ logged, otherLogged}) => {
  return (
    <DivDisplay>
      {logged && <DisplayMsg color={logged}>Requisição Completa!</DisplayMsg>  }
      {otherLogged && <DisplayMsg>Requisição Falhou!</DisplayMsg> }
    </DivDisplay>
  );
};

export default Display;
