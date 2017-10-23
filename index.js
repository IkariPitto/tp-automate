'use strict';

const puppeteer = require('puppeteer');
const url = require("url");

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    
    page.on('framenavigated', async frame => {
        console.log(frame.url())
        var frameUrl = url.parse(frame.url(), true)
        if (frameUrl.hostname === 'renthouse.alipay-eco.com') {
            if (frameUrl.query.app_id && frameUrl.query.scope && frameUrl.query.auth_code) {
                await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
                
                await page.setViewport({
                    width: 375,
                    height: 667,
                    deviceScaleFactor: 1,
                    isMobile: true,
                    hasTouch: true,
                    isLandscape: false
                })
            }
        }
    })

// Open page.
    await page.goto('https://renthouse.alipay-eco.com/src/pages/findRoom/findroom.html');

// Keep the browser open.
// browser.close();
})();