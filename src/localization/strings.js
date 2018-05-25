import LocalizedStrings from 'react-localization';
import hindiStrings from './hindiStrings';

const strings = new LocalizedStrings({
  en: {
    Name: 'Name',
    Email: 'Email',
    Phone: 'Phone',
    Work: 'Work',
    City: 'City',
    Important: 'Important',
    Edit: 'Edit',
    Delete: 'Delete',
    Search: 'Search',
    FriendList: 'Friend List',
    FriendForm: 'Friend Form',
    FriendDataTable: 'Friend Data Table',
    FriendDataForm: 'Friend Data Form',
    Submit: 'Submit',
    EmailAddress: 'Email Address',
    MobileNumber: 'Mobile Number',
    PleaseSelectOne: 'Please select one',
  },
  hi: hindiStrings,
});
export default strings;
