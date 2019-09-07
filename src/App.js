import React, {Component} from 'react';
// import AdminComponent from './Admin/AdminComponent.js';
// import AnswerComponent from './Answer/AnswerComponent.js';
// import QuestionComponent from './Question/QuestionComponent.js';
// import CommonComponent from './Common/CommonComponent.js';
import SignupComponent from './UserComponent/SignupComponent.js';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <AdminComponent />
        <AnswerComponent />
        <QuestionComponent />
        <CommonComponent /> */}
        <SignupComponent />
      </div>
    );
  }
}