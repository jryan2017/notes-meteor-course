import React from 'react';
import { withRouter } from 'react-router-dom';
import { Session } from 'meteor/session';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

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
                    <Editor/>
                </div>
            </div>
        );
    }
};

export default withRouter(Dashboard);