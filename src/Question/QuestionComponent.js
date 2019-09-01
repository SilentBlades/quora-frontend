import React, {Component} from 'react';

export default class QuestionComponent extends Component{
    render(){
        return(
            <div>
                This is Question Component.
                Below are the things that need to be implemented:
                    1. Create Question
                    2. Get all questions
                    3. Edit Question
                    4. Delete questions
                    5. Get question by userid
            </div>
        );
    }
}