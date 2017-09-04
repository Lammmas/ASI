import React from "react";
import "../stylesheets/result.scss";

import Octicon from 'react-octicon';

import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

export default class Result extends React.Component {
  constructor(props) {
    super(props);

    if (typeof this.props.data == undefined) this.props.data = {};
  }

  footer() {
    let cls = this.props.data.language;
    if (cls === null) cls = 'No language';

    // Replace + with 'plus' and # with 'sharp'
    cls = cls.replace(/\+/g, 'plus');
    cls = cls.replace(/#/g, 'sharp');
    cls = cls.replace(/'/g, '');

    return (
      <span>
        <span className={`lang-color ${cls}`}></span> {this.props.data.language} &nbsp;
        <Octicon name="star" /> {this.props.data.stargazers_count} &nbsp;
        <Octicon name="repo-forked" /> {this.props.data.forks_count}
      </span>);
  }

  render() {
    return (
      <Col md={4}>
        <Panel footer={this.footer()} className="result">
          <h4><strong><a href={this.props.data.html_url}>{this.props.data.name}</a></strong></h4>
          <div className="description">{this.props.data.description}</div>
        </Panel>
      </Col>
    );
  }
}
