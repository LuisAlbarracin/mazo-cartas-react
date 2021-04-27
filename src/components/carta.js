import React from "react";
import './carta.css';

class Carta extends React.Component {

  clickCarta = () => {
    const cartas = JSON.parse(localStorage.getItem('cartas'))
    for(let i=0; i < cartas.length; i++) {
      if(cartas[i].numero === this.props.id){
        cartas[i].cantidad ++;
        break;
      }
    }

    localStorage.setItem("cartas", JSON.stringify(cartas));
  }


  render() {
    return (
      <div className="Carta">
        <img src={this.props.src} alt={this.props.alt} id={this.props.id} onClick={this.clickCarta}/>
      </div>
    );
  }
}

export default Carta;
