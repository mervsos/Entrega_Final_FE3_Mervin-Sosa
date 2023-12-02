import React from "react";
import { useState } from "react";
import { validName } from '../../../validate/validName.js'
import { validEmail } from '../../../validate/validEmail.js'
import form from './Form.module.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  })
  const [message, setMessage] = useState("")

  const handleChange = e => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value
    }
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validName(inputs.name) && validEmail(inputs.email)) {
      console.log("hola!");
      setMessage(`Gracias ${inputs.name}, te contactaremos cuando antes vía mail`)
      setInputs({
        name: "",
        email: ""
      })
    }
    else {
      setMessage("Por favor verifique su información nuevamente")
    }
  }

  return (
    <div className={form.container}>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">nombre</label>
          <input type="text" name="name" id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            onSubmit={handleSubmit}
            type="submit"
          >Enviar</button>
        </div>
      </form>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Form;
