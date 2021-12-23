import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <CommentDetail avatar={faker.image.people()} author="Mat" date="Today, 12:45pm" content="Excelent videos" />
            </ApprovalCard>
            <CommentDetail avatar={faker.image.people()} author="Denis" date="Yesterday, 08:45am" content="Wow wow wow" />
            <CommentDetail avatar={faker.image.people()} author="Luis" date="Yesterday, 10:02pm" content="Please more!" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));