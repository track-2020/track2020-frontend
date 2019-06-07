import { sortByIssueScore } from './candidate-selectors';

describe('issue score', () => {
  it('sorts a candidate array by an issue score', () => {
    const candidates = [
      {
        id: 0,
        1: {
          score: 4
        },
        2: {
          score: 1
        },
        3: {
          score: 2
        }
      },
      {
        id: 1,
        1: {
          score: 3
        },
        2: {
          score: 6
        },
        3: {
          score: 10
        }
      },
      {
        id: 2,
        1: {
          score: 0
        },
        2: {
          score: 19
        },
        3: {
          score: 5
        },
      }
    ];
    const newArray = sortByIssueScore(candidates, 2);
    expect(newArray).toEqual([
      {
        id: 2,
        1: {
          score: 0
        },
        2: {
          score: 19
        },
        3: {
          score: 5
        }
      },
      {
        id: 1,
        1: {
          score: 3
        },
        2: {
          score: 6
        },
        3: {
          score: 10
        }
      },
      {
        id: 0,
        1: {
          score: 4
        },
        2: {
          score: 1
        },
        3: {
          score: 2
        }
      }
    ]
    );
  });
});
