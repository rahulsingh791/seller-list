import React, { Component } from 'react';
import PElement from './PElement';

class Products extends Component {


    render(){
        let selnum = parseInt(localStorage.getItem("CurrSeller"));
        
        let currSspname = JSON.parse(localStorage.getItem("s"+selnum+"pname"));
        let currSsprice = JSON.parse(localStorage.getItem("s"+selnum+"price"));

        let productList = [];

        for(let i=0;i<currSspname.length;i++){
            let a= <PElement name={currSspname[i]} price={currSsprice[i]}/>
            productList.push(a);
        }

        return(
            <div className="productPage">
                <div className="heaDing">
                   
                        <button onClick={() => window.history.back()}><img src={require('./../assets/back.png')}></img></button>
                        <b>Products</b>
                    
                </div>
                <div className="productList">
                    {productList}
                </div>
            </div>
        );
    }
}

export default Products;