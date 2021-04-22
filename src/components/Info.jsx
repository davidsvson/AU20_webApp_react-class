import React from 'react';

class Info extends React.Component {


    render() {
        return (
            <div>
                Kom ihåg att: {this.props.remind}
            </div>
        )
    }
}

export default Info;