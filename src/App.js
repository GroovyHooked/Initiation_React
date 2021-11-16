import React from "react";
import './App.css';
import Client from './Client';
import Form from "./Form";
export default class App extends React.Component {

  state = {
    clients: [
      { id: 1, nom: "Pierre Martin" },
      { id: 2, nom: "Jean Michel" },
      { id: 3, nom: "Martin dupond" },
      { id: 4, nom: "John Doe" }
    ],
    titre: 'Liste de clients'
  };

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client)
    this.setState({clients})
  }

  render() {
    return (
        <div>
          <h1>{this.state.titre}</h1>
          <ul>
            {this.state.clients.map((client) => (
                <Client details={client} onDelete={this.handleDelete} />
            ))}
          </ul>
          <Form onSubmit={this.handleAdd} />
        </div>
    );
  }
}
