import React, {Component} from 'react';
class Product extends Component{
    render(){
        return(
            <div className="product">
            <div><img className="img" src={this.props.imgurl} alt="Italian Trulli"></img></div>
            <div className="info">
            <div className="cont">{this.props.name}<br></br>${this.props.price}</div>
            <div className="cont2"><button onClick={()=>this.props.remove(this.props.id)}>Delete</button></div>
            </div>
            </div>
        )
    }
}
export default Product;