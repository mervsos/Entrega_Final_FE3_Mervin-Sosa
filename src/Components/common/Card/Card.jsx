import React, { useContext } from "react";
import { Link } from "react-router-dom";
import card from './Card.module.css'
import { ContextGlobal } from "../../utils/global.context";

const Card = ({ name, username, id }) => {

  const data = {
    id,
    name,
    username
  }
  const { dataL, setDataL } = useContext(ContextGlobal)


  const addFav = () => {
    const buscar = dataL.find(el => el.id === id)
    if (buscar) {
      console.log(buscar);
      const newArray = dataL.filter(el => el.id !== buscar.id)
      setDataL([...newArray]);
    }
    else {
      setDataL([...dataL, data]);
    }
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={card.card}>
      <Link to={`/detail/${id}`}>
        <div className={card.containerImg}>
          <img className={card.avatar} src="https://cdn-icons-png.flaticon.com/512/3467/3467830.png" alt="" />
        </div>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

// {/* En cada card deberan mostrar en name - username y el id */ }
// {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */ }
// {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */ }