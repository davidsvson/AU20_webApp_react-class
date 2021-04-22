import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3
        }

        this.decrease = this.decrease.bind(this);
        // funk const [value, setValue] = useState(3);
    }

    decrease() {

        this.setState({
            value: this.state.value - 1
        })

    }

    increase = () => {

        this.setState({
            value: this.state.value + 1
        })
    }


    render() {
        return (
            <div>
                <p>Värdet är: {this.state.value} </p>
                <div>
                    <button onClick={this.decrease}> -1 </button>
                    <button onClick={this.increase}> +1 </button>
                </div>
            </div>
        )
    }
}

export default Counter;