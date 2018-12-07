import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

class StreamDelete extends Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions(){

    const { id } = this.props.match.params;
    const { deleteStream } = this.props;

    return (
    <React.Fragment>
      <button onClick={() => deleteStream(id)} className="ui button negative">Delete</button>
      <Link to="/" className="ui button">Cancel</Link>
    </React.Fragment>
    );
  }

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?';
    } 

    return `Are you sure want to delete the stream with title: ${this.props.stream.title}`;
  }


  render(){

    const dismiss = () => {
      history.push('/');
    }
  
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={dismiss}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}


export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);