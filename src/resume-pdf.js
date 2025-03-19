import path from 'path';

import puppeteer from 'puppeteer';

export default async (data) => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('file://' + path.resolve('data', 'jeferson-silva.html'), { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    await page.pdf({
        path: path.resolve('data', 'jeferson-silva.pdf'),
        margin: { top: '50px', right: '50px', bottom: '50px', left: '50px' },
        printBackground: true,
        format: 'A4',
    });

    await browser.close();
};