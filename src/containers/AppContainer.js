import React from "react";
import { connect } from "react-redux";
import App from "../components/App";
import { getVacancies } from "../actions";

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.getVacancies();
    }


    render() {
        let { originData, filteredData, isFetching, error } = this.props;

        return (
            <App
                originData={originData}
                filteredData={filteredData}
                isFetching={isFetching}
                error={error}
            />
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        getVacancies: () => dispatch(getVacancies())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
