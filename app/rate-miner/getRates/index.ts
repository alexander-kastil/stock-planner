import { AzureFunction, Context } from '@azure/functions';
import puppeteer from 'puppeteer';
import { RateQuery } from '../model/rateQuery';
import DomParser = require('dom-parser');

const timerTrigger: AzureFunction = async function (context: Context, rateTimer: any): Promise<void> {
    const queries: RateQuery[] = [
        { url: 'https://www.finanzen.at/aktien/gold_fields-aktie/tgt', name: 'Gold Fields', isin: 'ZAE000018123' },
        { url: 'https://www.finanzen.at/aktien/tesla-aktie/tgt', name: 'Tesla', isin: 'US88160R1014' },
    ];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (const rateQuery of queries) {
        await page.goto(rateQuery.url);
        const content = await page.content();
        let parser = new DomParser();
        const html = parser.parseFromString(content);
        let ratesResult = html.getElementsByClassName('aktien-big-font');
        if (ratesResult.length > 0) {
            rateQuery.current = getNumber(ratesResult[0].textContent);
            rateQuery.deltaCurr = getNumber(ratesResult[1].textContent);
            rateQuery.deltaPercent = getNumber(ratesResult[2].textContent);
            rateQuery.date = new Date();
            console.log(rateQuery);
        }
        context.bindings.rateQueueItem = JSON.stringify(queries);
    }
    await browser.close();
};

function getNumber(expr: string) {
    const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let num = expr.match(NUMERIC_REGEXP);
    return +(num[0] + '.' + num[1]);
}

export default timerTrigger;
