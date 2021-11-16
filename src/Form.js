import React, { Component} from "react";

class Form extends Component {
    state = {
        nouveauClient: ''
    }
    handleChange = (e) => {
        this.setState({nouveauClient: e.currentTarget.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const nom = this.state.nouveauClient;
        // const client = {id: id, nom: nom}
        this.props.onSubmit({id, nom});
        this.setState({nouveauClient: ''})

    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client" />
                <button>Confirmer</button>
            </form>
        )
    }
}
export default Form;