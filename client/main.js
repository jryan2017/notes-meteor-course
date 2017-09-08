import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import createHistory from 'history/createBrowserHistory';

import { routes } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

const history = createHistory();

Tracker.autorun(() => {
   const selectedNoteId = Session.get('selectedNoteId');
   
   if (selectedNoteId) {
       history.replace(`/dashboard/${selectedNoteId}`);
   }
});

Meteor.startup(() => {
    Session.set('selectedNoteId', undefined);
    ReactDOM.render(routes, document.getElementById("app"));
});