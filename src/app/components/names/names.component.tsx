import React, { PureComponent, Fragment } from "react";
import { connect } from 'react-redux';
import { NamesState } from "./types";
import { AppState } from "../../../store";
import { namesState } from "./names.selector";
import { namesInsertData } from "./names.actions";
import { Dispatch } from "redux";

interface Props {
    names: NamesState[];
}

interface State {
    firstName: string;
    lastName: string;
}

interface DispatchProps {
    isnertnamesState: (input: NamesState) => void;
}

class Names extends PureComponent<Props & DispatchProps, State> {
    public state: State = {
        firstName: '',
        lastName: ''
    };

    public onSubmit = () => {
        this.props.isnertnamesState({
            ...this.state,
        });
    }

    render(): JSX.Element {
        return (
            <Fragment>
                <p>Names lenght is {this.props.names.length}</p>
                <p>I will show names</p>
                { this.props.names.map((name, index) => (
                    <p key={index} >FN: {name.firstName}, LN: {name.lastName}</p>
                )) }
                <input placeholder='firstName' onChange={(e) => this.setState({
                    ...this.state,
                    firstName: e.target.value
                })} type="text" />
                <input placeholder='lastName' onChange={(e) => this.setState({
                    ...this.state,
                    lastName: e.target.value
                })} type="text" />
                <button onClick={this.onSubmit} >submit</button>
            </Fragment>
        )
    }
};

const mapStateToProps = (state: AppState): Props => ({
    names: namesState(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    isnertnamesState: (input: NamesState) => dispatch(namesInsertData(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Names)
