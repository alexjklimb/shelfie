import React, {Component} from 'react';
import axios from 'axios';
class Form extends Component{
    constructor(){
        super();
        this.state = {
            name:'product',
            price:20,
            imgurl:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/pineapple-fruit-1296x728-header-1296x728.jpg?w=1155&h=1528'
            };
        };
    handleChange1=( event )=> {
        console.log("working")
        this.setState({ name: event.target.value });
      }
    handleChange2=( event )=> {
        console.log("working")
        this.setState({ price: event.target.value });
      }
    handleChange3=( event )=> {
        console.log("working")
        this.setState({ imgurl: event.target.value });
      }
    Cancel=()=>{
        this.setState({
            name:"product",
            price:20,
            imgurl:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/pineapple-fruit-1296x728-header-1296x728.jpg?w=1155&h=1528'
        })
        console.log("working")
    }
    Add=()=> {
        const { name } = this.state;
        const { price } = this.state;
        const { imgurl } = this.state;
        axios.post('/api/inventory',{name,price,imgurl})
        this.props.update()
        this.Cancel()
      }
    render(){
        return(
            <div className="form">
                <div className="box"></div>
                <h1>Product Name: <input placeholder="product" 
                    onChange={ this.handleChange1 }
                    value={ this.state.name }/>
                </h1>
                <h1>Price: <input placeholder="0" 
                    onChange={ this.handleChange2 }
                    value={ this.state.price }/>
                </h1>
                <h1>Img URL: <input placeholder="image" 
                    onChange={ this.handleChange3 }
                    value={ this.state.imgurl }/>
                </h1>
                <div className="buttons">
                <button onClick={this.Cancel}>Cancel</button>
                <button onClick={this.Add}>Add to Inventory</button>
                </div>



            </div>
        )
    }
}
export default Form;