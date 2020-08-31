import deepEqual from '../deepEqual';

describe('compare ', () => {
  it('compare', () => {
    expect(deepEqual('a', 'a')).toEqual(true);
    expect(deepEqual(0, 0)).toEqual(true);
    expect(deepEqual(1, 1)).toEqual(true);
    expect(deepEqual(NaN, NaN)).toEqual(true);
    expect(deepEqual(undefined, undefined)).toEqual(true);
    expect(deepEqual({}, {})).toEqual(true);
    expect(deepEqual([], [])).toEqual(true);
    expect(
      deepEqual(
        () => {
          console.log('hello'); // eslint-disable-line  no-console
        },
        () => {
          console.log('hello'); // eslint-disable-line  no-console
        }
      )
    ).toEqual(true);
    expect(
      deepEqual(
        {
          name: 'pomelo',
        },
        {
          name: 'pomelo',
        }
      )
    ).toEqual(true);
  });
  it('compare complex object', () => {
    const a = {
      name: 'pomelo',
      do: () => {
        console.log('do.'); // eslint-disable-line  no-console
      },
      circle: {
        a: [
          'a',
          {
            name: 'a', // eslint-disable-line  no-console
          },
        ],
      },
    };
    const b = {
      name: 'pomelo',
      do: () => {
        console.log('do.'); // eslint-disable-line  no-console
      },
      circle: {
        a: [
          'a',
          {
            name: 'a',
          },
        ],
      },
    };
    const c = {
      name: 'pomelo',
      do: () => {
        console.log('do'); // eslint-disable-line  no-console
      },
      circle: {
        a: [
          'a',
          {
            name: 'a',
          },
        ],
      },
    };

    expect(deepEqual(a, b)).toEqual(true);
    expect(deepEqual(a, c)).toEqual(false);
    expect(deepEqual(a.circle, c.circle)).toEqual(true);
  });
});
