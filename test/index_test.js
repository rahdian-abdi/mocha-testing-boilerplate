const assert = require("assert");
const fs = require("fs");

describe('Math', () => {
    describe('.min', () => {
      it('returns the argument with the lowest value', () => {

      })
    })
})

describe('Math Operation', () => {
    describe('+', () => {
        it('false result', () => {
            assert.ok(3+4 === 8);
        });
        it('true result', () => {
            assert.ok(3+4 === 7);
        })
    } )
})

let path, str;
describe("appendFileSync", () => {
  before(() => {
    path = "./message.txt";
  });

  afterEach(() => {
    fs.unlinkSync(path);
  });

  it("writes a string to text file at given path name", () => {
    str = "Hello Node.js";

    fs.appendFileSync(path, str);

    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
  });

  it("writes an empty string to text file at given path name", () => {
    str = "";

    fs.appendFileSync(path, str);

    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
  });
});

describe("-", () => {
  it("returns the difference of two values", () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 96;

    const result = bigNum - smallNum;

    assert.strictEqual(result, expected);
  });
});

describe('+', () => {
    it('returns the sum of two values', () => {
          let expected = {a: 3, b: 4, result: 7};
          let sum = {a: 3, b: 4};

          sum.result = sum.a + sum.b;
      assert.deepEqual(sum, expected);
    });
  });

const Rooster = require("../index.js");
describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      const expected = "cock-a-doodle-doo!";
      const result = Rooster.announceDawn();

      assert.equal(expected, result);
    });
  });

  describe(".timeAtDawn", () => {
    before(() => {
      hour = 23;
    });

    it("returns its argument as a string", () => {
      const expected = "23";
      const result = Rooster.timeAtDawn(hour);

      assert.deepEqual(expected, result);
    });

    it("throws an error if passed a number less than 0", () => {
      const outHour = -1;
      assert.throws(() => {
        Rooster.timeAtDawn(outHour);
      }, RangeError);
    });

    it("throws an error if passed a number greater than 23", () => {
      const outHour = 24;
      assert.throws(() => {
        Rooster.timeAtDawn(outHour);
      }, RangeError);
    });
  });
});