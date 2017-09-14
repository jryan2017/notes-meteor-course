import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export class PrivateHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    onLogout() {
        Accounts.logout(() => {
            this.props.history.replace("/");
        });
    }
    render() {
        const navImageSrc = this.props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
        
        return(
            <div className="header">
                <div className="header__content">
                    <img className="header__nav-toggle" onClick={this.props.handleNavToggle} src={navImageSrc}/>
                    <h1 className="header__title">{this.props.title}</h1>
                    <button className="button button--link-text" onClick={this.onLogout.bind(this)}>Logout</button>
                </div>
            </div>
        );
    }
}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
    handleLogout: PropTypes.func,
    isNavOpen: PropTypes.bool.isRequired,
    handleNavToggle: PropTypes.func.isRequired
};

export default createContainer(() => {
    return {
        handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
        isNavOpen: Session.get('isNavOpen'),
    };
}, withRouter(PrivateHeader));

//export default withRouter(PrivateHeader);