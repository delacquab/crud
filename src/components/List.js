import React from "react";
import Button from "./Button";

function List(props) {
  return (
    <div>
      <ul>
        {props.listagem.map((lista, index) => (
          <div className="flex flex-center">
            <li className="list" key={index}>
              {lista.nome} {lista.sobrenome}
            </li>
            <Button
              onClick={e => props.onClickAlterar(index)}
              texto="Alterar"
              type="warning"
            />
            <Button
              onClick={e => props.onClickDeletar(index)}
              texto="Deletar"
              type="danger"
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
