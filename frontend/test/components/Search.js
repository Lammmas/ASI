import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import Search from "../../src/components/Search";
import Grid from 'react-bootstrap/lib/Grid';

// unit tests for the Search component
describe('Search component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Grid/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
