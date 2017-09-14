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
                <PrivateHeader title="Notes"/>
                <div className="page-content">
                    <div className="page-content__sidebar">
                        <NoteList/>
                    </div>
                    <div className="page-content__main">
                        <Editor/>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Dashboard);