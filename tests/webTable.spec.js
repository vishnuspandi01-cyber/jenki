import { expect, test } from "@playwright/test";
test('webTable',async({page})=>{
    await page.goto("https://qavbox.github.io/demo/webtable/");
    const tabledatas = await page.locator("//table[@id='table02']/tbody/tr/td[2]").allTextContents()
    console.log(tabledatas);
    
    const rowtable = await page.locator("//table[@id='table02']/tbody/tr[2]/td[2]").textContent()
    console.log(rowtable);
    
    expect(rowtable).toEqual('Accountant');

})
 