import React from "react";
import Button from "./Button";

function Table({
  dados,
  cabecalho,
  alterar,
  deletar,
  onClickAlterar,
  onClickDeletar
}) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {cabecalho.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, idx) => (
            <tr key={idx}>
              {cabecalho.map((item, index) => (
                <td key={index}>{linha[item.toLowerCase()] || ""}</td>
              ))}
              <div className="flex horizontal">
                {alterar && (
                  <Button
                    onClick={e => onClickAlterar(idx)}
                    texto="Alterar"
                    type="warning"
                  />
                )}
                {deletar && (
                  <Button
                    onClick={e => onClickDeletar(idx)}
                    texto="Deletar"
                    type="danger"
                  />
                )}
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
