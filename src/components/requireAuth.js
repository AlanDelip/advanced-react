import React, {Component} from 'react';
import {connect} from "react-redux";

export default ChildComponent => {
	class ComposedComponent extends Component {
		componentDidMount() {
			this.shouldNavigateHome();
		}

		componentDidUpdate(prevProps, prevState, snapshot) {
			this.shouldNavigateHome();
		}

		shouldNavigateHome() {
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}

		render() {
			return <ChildComponent {...this.props}/>
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth
		}
	}

	return connect(mapStateToProps)(ComposedComponent);
};

