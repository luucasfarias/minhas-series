import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Alert } from 'reactstrap';

const Generos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/genres').then(response => {
      setData(response.data.data)
    })
  }, [])

  const renderizaLinha = record => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td><Button color="primary">+</Button></td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className="container">
        <Alert color="danger">
          Não há registros disponíveis
        </Alert>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Generos</h1>
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderizaLinha)}
        </tbody>
      </Table>
    </div>
  )
}

export default Generos;