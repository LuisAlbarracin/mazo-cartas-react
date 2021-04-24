import React from "react";
import '../css/styles.css';

class Carta extends React.Component {
  render() {
    return (
      <div className="carta">
        <img src={this.props.src} alt={this.props.alt} id={this.props.id} />
      </div>
    );
  }
}

export default Carta;
