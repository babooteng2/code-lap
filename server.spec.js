const should = require("should")
const server = require("./server")

describe("server test suit", () => {
    it('should return "hello world"', () => {
        server().should.be.equal("Hello world")
    })
})