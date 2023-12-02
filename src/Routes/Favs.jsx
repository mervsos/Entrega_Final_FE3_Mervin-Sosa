import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/common/Card/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {

  const { dataL } = useContext(ContextGlobal);

  console.log(dataL);

  const cards = dataL.map(user => {
    return (
      <Card key={user.id}
        name={user.name}
        username={user.username}
        id={user.id}
      />
    )
  }) 

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {cards}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
