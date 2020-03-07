import React from 'react';
import './Home.scss';

//Material
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Components
import MainTable from '../../Components/MainTable/MainTable';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div className="home">
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
                        <Tab label="Por Consultor" />
                        <Tab label="Por Cliente" />
                    </Tabs>
                </AppBar>

                <div style={this.state.value === 0 ? { display: 'block' } : { display: 'none' }}>
                    <MainTable />
                </div>
                <div style={this.state.value === 1 ? { display: 'block' } : { display: 'none' }}>
                    Item Two
                </div>
            </div>
        );
    }

}

export default Home;