import React from 'react';
import Header from './component/Header';
import Products from './component/Products';
import Categories from './component/Categories';
import FullItem from './component/FullItem';
import products from './product';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: products,
            orderCart: [],
            viewFull: false,
            fullItem: {}
        };
        this.delInCart = this.delInCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.filterCategories = this.filterCategories.bind(this);
        this.onViewFull = this.onViewFull.bind(this);
    }

    delInCart(id){
        const lastOrders = this.state.orderCart.filter(el => el.id != id);
        this.setState({
            orderCart: lastOrders
        },() => {
            console.log(this.state.orderCart);
        });
    }

    addToCart(el){
        let isArrayOrder = false;
        this.state.orderCart.forEach(element => { 
            if(element.id === el.id){
                isArrayOrder = true;
            }
        });
        if(!isArrayOrder){
            this.setState({
                orderCart: [...this.state.orderCart,el]
            });
        }
    }

    filterCategories(cat){
        this.setState({
            items: cat == 0 ? products : products.filter(el => el.categories == cat)
        });
    }

    onViewFull(item){
        this.setState({
            viewFull: !this.state.viewFull,
            fullItem: item
        },() => { console.log(this.state.fullItem); })
    }

    render() {
        return (
            <>
                <Header onClick={this.handleClick} delInCart={this.delInCart} orderCart={this.state.orderCart} />
                <Categories filterCategories={this.filterCategories} />
                <Products items={this.state.items} onClick={this.addToCart} onViewFull={this.onViewFull} />
                {this.state.viewFull && <FullItem item={this.state.fullItem} onViewFull={this.onViewFull} addToCart={this.addToCart} />}
            </>
        );
    }
}
