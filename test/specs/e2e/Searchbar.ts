import GlobalPage from "../../pages/GlobalPage";
import { helionHomeUrl } from "../../config/pagesUrl";

describe("E2E- SearchBar", async () => {
    it("Should open helion page and verify searchbar", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
    })
})