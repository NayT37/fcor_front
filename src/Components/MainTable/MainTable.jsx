import React from 'react';
import './MainTable.scss';

class MainTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="m-table component--container">
                <div className="m-table__main">
                    <div className="m-table__main__titles">
                        <div className="m-table__main__titles__title">
                            Periodo
                            </div>
                        <div className="m-table__main__titles__title m-table__main__titles__title--clientes">
                            Clientes
                            </div>
                    </div>
                    <div className="m-table__main__container">
                        <div className="m-table__main__container__time-fil">
                            Filtering baby
                        </div>
                        <div className="m-table__main__container__boxes">
                            <div className="m-table__main__container__boxes__box">
                                box
                                </div>
                            <div className="m-table__main__container__boxes__actions">
                                <button className="m-table__main__container__boxes__actions__btn"> &gt;&gt; </button>
                                <button className="m-table__main__container__boxes__actions__btn"> &lt;&lt; </button>
                            </div>
                            <div className="m-table__main__container__boxes__box">
                                box
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