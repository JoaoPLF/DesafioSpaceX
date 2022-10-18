const { assert } = require("chai");
const { getLaunchData } = require("../src/utils/getLaunchData");

describe("Endpoints", () => {
  it("should get the next launch info", async () => {
    try {
      const data = await getLaunchData("next");

      assert.instanceOf(data, Object);
      assert.containsAllKeys(data, ["name", "date_local", "flight_number"]);
    }
    catch (err) {
      throw err;
    }
  });
  
  it("should get the latest launch info", async () => {
    try {
      const data = await getLaunchData("latest");

      assert.instanceOf(data, Object);
      assert.containsAllDeepKeys(data, ["name", "date_local", "flight_number"]);
    }
    catch (err) {
      throw err;
    }
  });

  it("should get upcoming launches info", async () => {
    try {
      const data = await getLaunchData("upcoming");

      assert.instanceOf(data, Object);
      assert.containsAllKeys(data["0"], ["name", "date_local", "flight_number"]);
    }
    catch (err) {
      throw err;
    }
  });

  it("should get past launches info", async () => {
    try {
      const data = await getLaunchData("past");

      assert.instanceOf(data, Object);
      assert.containsAllKeys(data["0"], ["name", "date_local", "flight_number"]);
    }
    catch (err) {
      throw err;
    }
  });
});