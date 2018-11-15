import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45pm" image={faker.image.avatar()} post="This was really interesting" />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 5:55pm" image={faker.image.avatar()} post="Epic."/>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 7:38pm" image={faker.image.avatar()}  post="Go to hell." />
      </ApprovalCard>
      
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector("#root"));