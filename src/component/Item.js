import React from "react";
import { FaHeart } from 'react-icons/fa';

export default class Item extends React.Component {
    render(){
        return (
            <div className="shop-box anim">
                <div className="shop-name">{this.props.item.name}</div>
                <div className="img-el box-flex-c">
                    <div className="delay anim delay-uncheck" title="Отложить">
                        <FaHeart className="fa-heart-o" />
                </div>
                <img src={`/images/${this.props.item.img}`} alt={this.props.item.name} onClick={() => this.props.onViewFull(this.props.item)} /></div>     
                <div className="article"> Артикул: ЦБ-00026398 </div> 
                <div className="item-desc">{this.props.item.name}</div>
                <div className="basket-block">
                    <div className="box-flex">
                        <div className="b-count">
                            <div className="minus"><span>-</span></div>
                            <input type="text" id="quantity_new_4909" name="quantity" className="quantity" defaultValue="1" />
                            <div className="plus"><span>+</span></div>
                        </div>
                        <button type="submit" name="add2basket" className="btn_buy" value="В корзину" onClick={() => this.props.onClick(this.props.item)}><i className="fa fa-shopping-cart"></i><span>В корзину</span></button>
                    </div>
                </div>
                <div className="min-pr">{this.props.item.price} <span className="unit"> руб. <span>за м</span></span></div>
            </div>
        );
    }
}