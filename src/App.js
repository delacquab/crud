import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import Button from "./components/Button";
import Table from "./components/Table";

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [listagem, setListagem] = useState([]);
  const [listagemBkp, setListagemBkp] = useState([]);
  const [alterar, setAlterar] = useState(false);

  useEffect(() => {
    const newListagem = localStorage.getItem("listagem");

    if (newListagem) {
      setListagem(JSON.parse(newListagem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listagem", JSON.stringify(listagem));
  }, [listagem]);

  function handleClick() {
    const newListagem = listagem.concat([
      {
        id: Math.random(),
        nome,
        sobrenome
      }
    ]);
    setListagem(newListagem);
    setNome("");
    setSobrenome("");
  }

  const handleClickCancelar = () => {
    setListagem(listagemBkp);
    setListagemBkp([]);
    setNome("");
    setSobrenome("");
    setAlterar(false);
  };

  const handleClickGravar = () => {
    handleClick();
    setListagemBkp([]);
    setAlterar(false);
  };

  const onChangeNome = event => {
    setNome(event.target.value);
  };

  const onChangeSobrenome = event => {
    setSobrenome(event.target.value);
  };

  const handleClickDeletar = index => {
    const newListagem = listagem.filter((item, _index) => _index !== index);
    setListagem(newListagem);
  };

  const handleClickAlterar = index => {
    setListagemBkp(listagem);

    const umaLista = listagem.filter((lista, _index) => {
      return _index === index;
    });

    setNome(umaLista[0].nome);
    setSobrenome(umaLista[0].sobrenome);

    handleClickDeletar(index);
    setAlterar(true);
  };

  // const handleClickAlterar1 = index => {
  //   const umaLista = listagem.filter(lista => {
  //     return lista.id === index;
  //   });

  //   setNome(umaLista[0].nome);
  //   setSobrenome(umaLista[0].sobrenome);

  //   const newListagem = listagem.filter(lista => {
  //     return lista.id !== index;
  //   });

  //   setListagem(newListagem);
  // };

  return (
    <div className="Card flex flex-center vertical">
      <div>
        <h1>CRUD</h1>
      </div>
      <div className="flex horizontal flex-center">
        <Input placeholder="Nome" value={nome} onChange={onChangeNome} />
        <Input
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={onChangeSobrenome}
        />
        {!alterar ? (
          <Button onClick={handleClick} texto="Adicionar" type="success" />
        ) : (
          <div className="flex horizontal">
            <Button
              onClick={handleClickGravar}
              texto={<i className="fas fa-check" />}
              type="success"
            />
            <Button
              onClick={handleClickCancelar}
              texto={<i className="fas fa-times" />}
              type="danger"
            />
          </div>
        )}
      </div>
      <br />
      {/* <List
        listagem={listagem}
        onClickDeletar={handleClickDeletar}
        onClickAlterar={handleClickAlterar}
      /> */}
      <br />
      <Table
        cabecalho={["Nome", "Sobrenome"]}
        dados={listagem}
        alterar={alterar ? false : true}
        deletar={alterar ? false : true}
        onClickDeletar={handleClickDeletar}
        onClickAlterar={handleClickAlterar}
      />
    </div>
  );
}

export default App;
