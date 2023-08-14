const filterByTerm = require("../src/filterByTerm");
describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input0 = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output0 = [{ id: 3, url: "https://www.link3.dev" }];
    const output1 = [{ id: 3, url: "https://www.link3.dev" }];
    const output2 = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }];

    expect(filterByTerm(input0, "link")).toEqual(output0);
    expect(filterByTerm(input0, "LINK")).toEqual(output1);
    expect(filterByTerm(input0, "uRL")).toEqual(output2);
  });
});
