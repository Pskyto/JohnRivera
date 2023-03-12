import React, { Component } from 'react';

class Formequipos extends Component {
  constructor () {
    super();
    this.state = {
      tipo: '',
      marca: '',
      estado: 'Sin Asignar'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddeqp(this.state);
    this.setState({
      tipo: '',
      marca: '',
      estado: 'Sin Asignar'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="Tipo"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Tipo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Marca"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Marca"
              />
          </div>
          <div className="form-group">
            <select
                name="Estado"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>Sin Asignar</option>
              <option>Asignado</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default Formequipos;