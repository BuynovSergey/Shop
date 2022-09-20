import React from 'react';
import categories from '../categories';

class Categories extends React.Component {
    render(){
        return (
            <div className='main'>
                <div className='b-categories'>
                    <div className='categories-item' key='0' onClick={() => this.props.filterCategories(0)}>Все</div>
                    {categories.map(el => (
                        <div className='categories-item' key={el.id} onClick={() => this.props.filterCategories(el.id)}>{el.name}</div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Categories;