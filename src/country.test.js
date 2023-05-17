import {findColour, darkBlue} from '../src/country';

describe("Tetsing colour mapping", () => {

  test('Confirm we look up the right colour for the UK', () => {
        // WHEN we run initialize
        const uk = findColour('United Kingdom');

        // THEN window.dl.tags will exist
        expect(uk).toBe(darkBlue);
  });

});