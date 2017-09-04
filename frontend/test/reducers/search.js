import assert from "assert";
import search from "../../src/reducers/search";

describe('Search reducer', () => {
    describe('SEARCH_RESULTS', () => {
        it('should return the results of the search', () => {
            assert.deepEqual(
                search({}, {
                    type: 'SEARCH_RESULTS',
                    results: [{id: 1, name: 'Result'}]
                }),
                [{id: 1, name: 'Result'}]
            );
        });
    });
});