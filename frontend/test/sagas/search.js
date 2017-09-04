import { call, put } from "redux-saga/effects";
import assert from "assert";
import { searchFetchList } from "../../src/sagas/search";
import ApiSearch from "../../src/api/search";

describe('Search saga', () => {
    describe('searchFetchList("test")', () => {
        const generator = searchFetchList({name: 'test'});

        // Here should be a proper test for the data comparison AKA does data match mock data
        generator.next().value;

        it('should return the SEARCH_RESULTS action', () => {
            assert.deepEqual(generator.next().value, put({type: 'SEARCH_RESULTS', results: undefined}));
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });
});