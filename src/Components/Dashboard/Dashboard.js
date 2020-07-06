import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios'
class Dashboard extends Component{

    remove=(id)=> {
        console.log(id)
        axios.delete('./api/inventory'+`/${id}`)
          this.props.update();
      }
    render(){
        return(
            <div className='dash'>
            {
                this.props.inventory.map( item => (
                <Product id={item.product_id} remove={this.remove} name={ item.productname} price={ item.price } imgurl={ item.image_url }/>))
            }
            </div>
        )
    }
}
export default Dashboard;