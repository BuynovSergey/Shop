import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Header.css";

function YesOrders2(props) {
    return (
        <div className="header-cart-item">
            <div className="header-cart-item__img"><img src={`/images/${props.orders.img}`} /></div>
            <div className="header-cart-item-info">
                <div className="header-cart-item__name">{props.orders.name}</div>
                <div className="header-cart-item__price">Цена <b>{props.orders.price}</b> руб.</div>
            </div>
            <FaTrash className="del-order-cart" onClick={() => props.delInCart(props.orders.id)} />
        </div>
    );
}

const cartState = {
    YesOrders: function (props){
        const arr = props.orders.map(el => 
            (<div className="header-cart-item" key={el.id}>
                <div className="header-cart-item__img"><img src={`/images/${el.img}`} /></div>
                <div className="header-cart-item-info">
                    <div className="header-cart-item__name">{el.name}</div>
                    <div className="header-cart-item__price">Цена <b>{el.price}</b> руб.</div>
                </div>
                <FaTrash className="del-order-cart" onClick={() => props.delInCart(el.id)} />
            </div>));
        
        return arr;
    },

    ShowOrders: function (props){
        let summ = 0;
        props.orders.forEach(el => summ += parseInt(el.price))

        return (<div>
                { props.orders.map(el => <YesOrders2 orders={el} key={el.id} delInCart={props.delInCart} />)}
                <div className="cat-summ">Сумма: {summ} руб.</div>
            </div>);
    },

    NoOrders: function (){
        return <h3>Товаров нет!</h3>
    }
}

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
        this.onClickCart = this.onClickCart.bind(this);
    }

    onClickCart(el){
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        return (
            <header onClick={this.props.onClick}>
                <div className="main">
                    <div className="h-line">
                        <img src="/images/logo.png" />
                        <div className="ico-cart" onClick={this.onClickCart}>
                            <img src='/images/cart.svg' />
                            <div className="order-count">{this.props.orderCart.length}</div>
                        </div>
                        <div className={`header-cart-info ${this.state.isActive && ("active")}`}>
                            {this.props.orderCart.length > 0 ?   
                                <cartState.ShowOrders orders={this.props.orderCart} delInCart={this.props.delInCart} /> :
                                <cartState.NoOrders />
                            }
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}