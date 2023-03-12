import React, { Component } from "react";

class navigation extends Component{

    view_eqp(){
        document.getElementById('per').style.display = "none";
        document.getElementById('eqp').style.display = "block";
        document.getElementById('cardclima').style.display = "none";
        document.getElementById('barsearch').style.display = "none";
    }

    view_people(){
        document.getElementById('eqp').style.display = "none";
        document.getElementById('per').style.display = "block";
        document.getElementById('cardclima').style.display = "none";
        document.getElementById('barsearch').style.display = "none";
    }

    hidden_all(){
        document.getElementById('eqp').style.display = "none";
        document.getElementById('per').style.display = "none";
        document.getElementById('cardclima').style.display = "block";
        document.getElementById('barsearch').style.display = "block";
    }
    
   render(){
        return(
           
            <nav className='barra-nav'> 
           
                    <a className="nava" onClick={this.hidden_all.bind(this)}>Home</a>      
                    <a className="nava" onClick={this.view_eqp.bind(this)}>   
                    Equipos           
                    </a>
                    <a className="nava" onClick={this.view_people.bind(this)}>
                    Personas
                    </a>
                    <div id="indicator"></div>
                   
            </nav>
        )
    }

}

export default navigation;