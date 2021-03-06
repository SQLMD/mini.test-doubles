const { expect } = require("chai");
const sinon = require("sinon");
const Ghibliator = require("../Ghibliator");
const fs = require("fs");

describe("Ghibliator", () => {
  it("should return average age of characters", () => {
    // setup
    const expected = 33;
    const delta = 1;
    const stubText = `[{ "age": 32 }, { "age": 33 }, { "age": 34 }]`;
    const stub = sinon.stub(fs, "readFileSync").returns(stubText);
    // exercise
    const actual = new Ghibliator().getAverageAge();

    // assert
    expect(actual).closeTo(actual, expected, delta);
    expect(stub.calledOnce).to.be.true;
    // teardown
    stub.restore();
  });

  it("should return appearances", () => {
    // setup
    const expected = 2;

    //Create stub with fake film data
    const data = `[{"name": "Baron Humbert von Gikkingen", "films": ["https:a", "https://b"]}]`;

    const stub = sinon.stub(fs, "readFileSync").returns(data);
    // exercise
    const actual = new Ghibliator().appearances("Baron Humbert von Gikkingen");

    // assert
    expect(actual).to.equal(expected);
    expect(stub.calledOnce).to.be.true;
    // teardown
    stub.restore();
  });
});
