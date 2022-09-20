import React from "react";
import Item from "./Item";

export default class Products extends React.Component {
    render() {
        //console.log(this.props.items);
        return (
            <div className="product-items">
                {this.props.items.map(el => (<Item key={el.id} item={el} onClick={this.props.onClick} onViewFull={this.props.onViewFull} />))}
            </div>
        );
    }
}