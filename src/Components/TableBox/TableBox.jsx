import React from 'react';
import './TableBox.scss';

class TableBox extends React.Component {

    constructor(props) {
        super(props);
        this.selectItem.bind(this);
    }

    selectItem = (event) => {
        let elem = event.target;
        elem.classList.toggle('active');
        this.props.onChildClick(elem);
    }

    render() {
        return (
            <div className="t-box">
                <h4 className="t-box__title" style={this.props.title ? { display: 'block' } : { display: 'none' }}>
                    {this.props.title}
                </h4>
                <div className="t-box__content">
                    <ul className="t-box__content__list">
                        {this.props.values ? (
                            this.props.values.map((el, index) => {
                                return <li className="t-box__content__list__item" key={index} onClick={this.selectItem}>{el}</li>;
                            })
                        ) : ('')
                        }
                    </ul>
                </div>
            </div>
        );
    }

}

export default TableBox;