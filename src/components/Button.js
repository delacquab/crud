import React from "react";

// import { Container } from './styles';

function Button({ onClick, texto, type }) {
  return (
    <div>
      <button
        className={`button button-${type} || 'default'`}
        onClick={onClick}
      >
        {texto}
      </button>
    </div>
  );
}

export default Button;
