import React,{Component} from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import Filter from './Filter'

var products={
    '1':{id:1,category:'Music Instrumental', price:'$459.99', stocked:'true', name:'clarinet'},
    '2':{id:2,category:'Music Instrumental', price:'$459.99', stocked:'true', name:'clarinet'},
    '3':{id:3,category:'Music Instrumental', price:'$459.99', stocked:'true', name:'clarinet'},
    '4':{id:4,category:'Furniture', price:'$459.99', stocked:'true', name:'clarinet'},
    '5':{id:5,category:'Furniture', price:'$459.99', stocked:'true', name:'clarinet'},
    '6':{id:6,category:'Furniture', price:'$459.99', stocked:'true', name:'clarinet'}

}

class Product extends Component{
    render(){
        return(
            <div>
                <Filter/>
                <ProductTable />
                <ProductForm />
            </div>
        )
    }
}
export default Product;