import React,{Component} from 'react'

class Filter extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="search..."/>
                <p>
                    <label>
                        <input text="checkbox"/> 
                        &nbsp;
                            Only show products in stock
                    </label>
                </p>
            </form>
        )
    }
}

export default Filter;