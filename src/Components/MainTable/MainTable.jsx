import React from 'react';
import './MainTable.scss';

import TableBox from '../TableBox/TableBox';

class MainTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableBoxValues_1: ['Jhon Doe', 'Peter Parker'],
            tableBoxValues_2: [],
            tableBoxValues_Temp: []
        };
    }

    handleTableBoxClick(elem) {
        if (this.state.tableBoxValues_Temp.length === 0) {
            this.setState({
                tableBoxValues_Temp: [
                    elem,
                ]
            });
        } else {
            this.setState({
                tableBoxValues_Temp: [
                    ...this.state.tableBoxValues_Temp,
                    elem
                ]
            });
        }

        console.log(this.state);
    }

    render() {
        return (
            <div className="m-table component--container">
                <div className="m-table__main">
                    <div className="m-table__main__titles">
                        <div className="m-table__main__titles__title m-table__main__titles__title--period">
                            Periodo
                            </div>
                        <div className="m-table__main__titles__title">
                            Clientes
                            </div>
                    </div>
                    <div className="m-table__main__container">
                        <div className="m-table__main__container__time-fil">
                            Filtering baby
                        </div>
                        <div className="m-table__main__container__boxes">
                            <div className="m-table__main__container__boxes__box">
                                <TableBox
                                    title="Titulo 1"
                                    values={this.state.tableBoxValues_1}
                                    onChildClick={this.handleTableBoxClick.bind(this)} />
                            </div>
                            <div className="m-table__main__container__boxes__actions">
                                <button className="m-table__main__container__boxes__actions__btn" title="Pasar uno"> &gt;&gt; </button>
                                <button className="m-table__main__container__boxes__actions__btn" title="Volver uno"> &lt;&lt; </button>
                                <button className="m-table__main__container__boxes__actions__btn" title="Reset">Reset </button>
                                <button className="m-table__main__container__boxes__actions__btn" title="Pasar todos">Pasar todos</button>
                            </div>
                            <div className="m-table__main__container__boxes__box">
                                <TableBox
                                    title="Titulo 2"
                                    values={this.state.tableBoxValues_2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-table__sec">
                    <button className="m-table__sec__btn">Relatorio</button>
                    <button className="m-table__sec__btn">Gráfico</button>
                    <button className="m-table__sec__btn">Pizza</button>
                </div>
            </div>
        );
    }

}

export default MainTable;