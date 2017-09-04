import React from "react";

import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import Result from './Result';

export default class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let row = null;

    if (Object.keys(this.props.results).length === 0) row = '';
    else row = <Row>{this.props.results.map((x, i) => <Result key={i} data={x} />)}</Row>;

    return (<Grid>{row}</Grid>);
  }
}
