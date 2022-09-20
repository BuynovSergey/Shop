import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

class FullItem extends React.Component {
    render(){
        return (
            <div className='fade'>
                <div className='full-item'>
                    <FaTimesCircle className='full-item-close' onClick={() => this.props.onViewFull({})} />
                    <div className='full-item-img'><img src={`/images/${this.props.item.img}`} alt={this.props.item.name} /></div>
                    <div className='full-item-name'><h2>{this.props.item.name}</h2></div>
                    <div className='full-item-price'>Цена {this.props.item.price} руб.</div>
                    <button type="submit" name="add2basket" className="btn_buy" value="В корзину" onClick={() => this.props.addToCart(this.props.item)}><span>В корзину</span></button>
                    <div className='full-item-des'><h3>Описание</h3>{this.props.item.description}</div>
                </div>
            </div>
        )
    }
}

export default FullItem;