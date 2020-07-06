import React, {Component} from 'react';
class Product extends Component{
    render(){
        return(
            <div className="product">
            <div><img className="img" src={this.props.imgurl} alt="Italian Trulli"></img>{this.props.name}{this.props.price}</div>
            <button onClick={()=>this.props.remove(this.props.id)}>Delete</button>
        </div>
        )
    }
}
export default Product;