import React from 'react';
import { withRouter } from 'react-router-dom';
import { Session } from 'meteor/session';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Session.set('selectedNoteId', this.props.match.params.id);
    }
    render() {
        return(
            <div>
                <PrivateHeader title="Dashboard"/>
                <div className="page-content">
                    <NoteList/>
                </div>
            </div>
        );
    }
};

export default withRouter(Dashboard);