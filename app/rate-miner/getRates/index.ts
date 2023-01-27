import { AzureFunction, Context } from '@azure/functions';
import puppeteer from 'puppeteer';
import { RateQuery } from '../model/rateQuery';

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();

    const queries: RateQuery[] = [
        { url: 'https://www.finanzen.at/aktien/gold_fields-aktie/tgt', name: 'Gold Fields', isin: 'ZAE000018123' },
        { url: 'https://www.finanzen.at/aktien/tesla-aktie/tgt', name: 'Tesla', isin: 'US88160R1014' },
    ];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (const query of queries) {
        await page.goto(query.url);
        const content = await page.content();
    }
    await browser.close();
};

export default timerTrigger;
