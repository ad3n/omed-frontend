const SidebarFooter = require("./SidebarFooter")
// @ponicode
describe("render", () => {
    let inst

    beforeEach(() => {
        inst = new SidebarFooter.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.render()
        }
    
        expect(callFunction).not.toThrow()
    })
})
