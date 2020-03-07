import React from 'react';
import './global/_reset.scss';
import './global/_global-styles.scss';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App container">

        <Home />


      {/* Info Table */}
      <div className="i-table i-table--container">
        <div className="i-table__header">
          User name
        </div>
        <div className="i-table__col-title">
          <ul className="col">
            <li className="col__row col__row--title">
              Periodo
            </li>
            <li className="col__row">
              Janeiro de 2007
            </li>
          </ul>
        </div>
        <div className="i-table__col-container">
          <div className="i-table__col-container__col">
            <ul className="col">
              <li className="col__row col__row--title">
                Receita Líquida
              </li>
              <li className="col__row">
                R$ 1.500,00
              </li>
            </ul>
          </div>
          <div className="i-table__col-container__col">
            <ul className="col">
              <li className="col__row col__row--title">
                Custo Fixo
              </li>
              <li className="col__row">
                - R$ 2.000,00
              </li>
            </ul>
          </div>
          <div className="i-table__col-container__col">
            <ul className="col">
              <li className="col__row col__row--title">
                Comissao
              </li>
              <li className="col__row">
                - R$ 1.000,00
              </li>
            </ul>
          </div>
          <div className="i-table__col-container__col">
            <ul className="col">
              <li className="col__row col__row--title">
                Lucro
              </li>
              <li className="col__row">
                - R$ 1.500,00
              </li>
            </ul>
          </div>
          <div className="i-table__col-container__col">
            <ul className="col">
              <li className="col__row col__row--title">
                Receita Líquida
              </li>
              <li className="col__row">
                R$ 1.500,00
              </li>
            </ul>
          </div>
          <div className="i-table__col-container__col">
            <ul className="col">
              <li className="col__row col__row--title">
                Receita Líquida
              </li>
              <li className="col__row">
                R$ 1.500,00
              </li>
            </ul>
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
