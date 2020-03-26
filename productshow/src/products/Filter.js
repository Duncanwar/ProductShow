import React,{Component} from 'react'

class Filter extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="search..." value={this.props.filterText}/>
                <p>
                    <label>
                        <input type="checkbox" checked={this.props.inStockOnly}/> 
                        &nbsp;
                            Only show products in stock
                    </label>
                </p>
            </form>
        )
    }
}

export default Filter;