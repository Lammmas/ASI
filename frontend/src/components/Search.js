import React from "react";
import { connect } from "react-redux";

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import ResultList from './ResultList';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.searchOnEnter = this.searchOnEnter.bind(this);
    this.state = {
        results: []
    };
  }

  render() {
    return (
      <Grid>
        <Row className="pb-1">
          <Col sm={6} md={9}>
            <FormGroup>
              <FormControl type="text" placeholder="Search" inputRef={node => this.name = node} onKeyPress={this.searchOnEnter} />
            </FormGroup>
          </Col>
          <Col sm={6} md={3}>
            <Button type="submit" bsStyle="primary" onClick={this.search} block>Get repositories</Button>
          </Col>
        </Row>
        <Row>
          <ResultList results={this.props.results} />
        </Row>
      </Grid>
    );
  }

  searchOnEnter(e) {
    if (e.key === 'Enter') this.search();
  }

  search() {
    this.props.dispatch({
      type: 'SEARCH',
      name: this.name.value
    });
  }
}

function mapStateToProps(state) {
    return {
        results: state.results
    };
}

export default connect(mapStateToProps)(Search);