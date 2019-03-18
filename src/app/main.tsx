import React, { PureComponent, Fragment } from 'react';
import Names from './components/names/names.component';

class Main extends PureComponent {
    render(): JSX.Element {
        return (
            <Fragment>
                <p>HellO!!</p>
                <Names />
            </Fragment>
        )
    }
}

export default Main;
