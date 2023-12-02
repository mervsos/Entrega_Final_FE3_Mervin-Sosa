import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [data, setData] = useState({})

  const { id } = useParams()

  const getDentistForId = async (searchDentisId) => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${searchDentisId}`)
      setData({ ...data }, data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDentistForId(id)
  }, [])

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.website}</td>
        </tr>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail