import axios from "axios";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";

const getUserFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? localData : 'light';
};

export const initialState = { theme: getUserFromStorage(), data: [] }


const reducer = (theme, action) => {
  switch (action.type) {
    case 'light':
      return {
        theme: theme.theme = 'dark',
      }
    case 'dark':
      return { theme: theme.theme = 'light' }
    default:
      return theme;
  }
}

export const ContextGlobal = createContext(undefined);

const setLocalStorage = (data) => {
  localStorage.setItem('favs', JSON.stringify(data))
}

const getLocalStorate = () => {
  const dataLocalStorate = localStorage.getItem('favs')
  return dataLocalStorate ? JSON.parse(dataLocalStorate) : []
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [users, setUsers] = useState([])
  const [dataL, setDataL] = useState(getLocalStorate())
  const [theme, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('theme', theme.theme)
  }, [theme])

  const handleChangeTheme = () => {
    dispatch({
      type: theme.theme
    })
  }

  useEffect(() => {
    setLocalStorage(dataL)
  }, [dataL])

  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers([...users, ...data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])


  const data = {
    users,
    setDataL,
    dataL,
    handleChangeTheme,
    theme
  }

  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};
