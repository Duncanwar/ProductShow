import React,{Component} from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import Filter from './Filter'

var PRODUCTS={
    '1':{id:1,category:'Music Instrumental', price:'$459.99', stocked:true , name:'clarinet'},
    '2':{id:2,category:'Music Instrumental', price:'$5,000', stocked:true , name:'Harpsicord'},
    '3':{id:3,category:'Music Instrumental', price:'$11,000', stocked:false , name:'Fortepiano'},
    '4':{id:4,category:'Furniture', price:'$799', stocked:true , name:'Chaise Lounge'},
    '5':{id:5,category:'Furniture', price:'$1,300', stocked:false , name:'Dining Table'},
    '6':{id:6,category:'Furniture', price:'$100', stocked:true , name:'Bean Bag'}

}

class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            inStockOnly:false,
            products:PRODUCTS
        };
    }
    render(){
        return(
            <div>
                <Filter 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                 products={PRODUCTS} 
                 filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                 />
                <ProductForm />
            </div>
        )
    }
}
export default Product;