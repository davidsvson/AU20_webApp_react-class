import React from 'react';
import Info from './Info';
import Counter from './Counter';
import Lifecycle from './Lifecycle';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLifeCycle: true
        };
    }


    render() {
        return (
            <main>
                <h2>Main komponent</h2>
                <Info remind="köpa kakor" />
                <Counter />
                {this.state.showLifeCycle ? <Lifecycle /> : null}
                <button onClick={() => this.setState({ showLifeCycle : !this.state.showLifeCycle})}>Toggle lifecycle</button>
            </main>
        )
    }
}

export default Main;