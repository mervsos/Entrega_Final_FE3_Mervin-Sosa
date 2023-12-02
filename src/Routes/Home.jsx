import { useContext } from "react";
import Card from '../Components/common/Card/Card'
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { users } = useContext(ContextGlobal)

  const cards = users.map(user => {
    return (
      <Card key={user.id}
        name={user.name}
        username={user.username}
        id={user.id}
      />
    )
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {cards}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home;