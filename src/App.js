// Trabajo de John Alexander Rivera Rivera

import logo from './components/logo.svg';
import './App.css';
import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Equipos from './components/equipos.json';
import Formequipos from './components/Formequipos';
import Personas from './components/personas.json';
import Formpersonas from './components/Formpersonas';
import Weatherpanel from './components/Weatherpanel';


class App extends Component { 
  constructor(){
    super();
    this.state = {
      Equipos
    }

    this.state = {
      Personas
    }
    this.handleAddeqp = this.handleAddeqp.bind(this);

  } 
  
  removeeqp(index) {
    this.setState({
      equipos: Equipos.equipos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddeqp(Equipos) {
    console.log(Equipos);
    this.setState({
      equipos: [...Equipos.equipos, Equipos]
    })

  }
  render() {
      
      const equipos = Equipos.equipos.map((equipo,i) => {
      return (
        <div className='col-md-4'>
        <li key={i} className='card mt-4'>
          <div className='card-header' >
          <h3>{equipo.marca}</h3>          
          </div>
          <div className='card-body'>
            <p>{equipo.tipo}</p>
            <span className='label label-primary'>{equipo.estado}
            </span>
          </div>
          <button
                className="btn btn-danger"
                onClick={this.removeeqp.bind(this, i)}>
                Delete
              </button>        
        </li>
        </div>
      )
      })

      const personas = Personas.personas.map((persona,p) =>{
        return (
          <div className='col-md-4'>
          <li key={p} className='card mt-4'>
            <div className='card-header' >
            <h3>{persona.nombre}</h3>          
            </div>
            <div className='card-body'>
              <p>{persona.area}</p>
            </div>          
          </li>
          </div>
        )
        })
      
    return (
      <div className="App">    
        
        <Navigation />  
        <Weatherpanel />   
        <div className='info-equipos'id='eqp'>
          <div className='container'>
            <div className='row mt-4'>
            <div className="col-md-4 text-center">
              <Formequipos onAddeqp={this.handleAddeqp}/>
            </div>

            <div className="col-md-8">
              <div className="row">
              {equipos} 
              </div>
            </div>
                      
            </div>
          </div> 
        </div>

        <div className='info-personas' id='per' >
          <div className='container'>
            <div className='row mt-4'>                 
              {personas}
            </div>
          </div> 
        </div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;