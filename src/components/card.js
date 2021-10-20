import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div className='col'>
                {/* card style jS object */}
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">Add<span className='badge badge-light'>{this.props.card.quantity}</span></button>
                    <img className="card-img-top" src={this.props.card.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Pizza {this.props.card.name}</h5>
                        <p className="card-text">£{this.props.card.price}</p>
                        {/* <button onClick={this.props.onDelete()} className="btn btn-outline-danger">Delete</button>
                        we need an arrow function to delete an argument of the function */}
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;