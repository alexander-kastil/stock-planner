import { AzureFunction, Context } from '@azure/functions';
import puppeteer from 'puppeteer';
import { RateQuery } from '../model/rateQuery';
import DomParser = require('dom-parser');

const timerTrigger: AzureFunction = async function (context: Context, rateTimer: any): Promise<void> {
    const rateQueries: RateQuery[] = [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (const item of rateQueries) {
        await page.goto(item.url);
        const content = await page.content();
        let parser = new DomParser();
        const html = parser.parseFromString(content);
        let rates = html.getElementsByClassName('aktien-big-font');
        if (rates.length > 0) {
            item.current = getNumber(rates[0].textContent);
            item.deltaCurr = getNumber(rates[1].textContent);
            item.deltaPercent = getNumber(rates[2].textContent);
            item.date = new Date();
            console.log(item);
        }
        context.bindings.rateQueueItems = JSON.stringify(rateQueries);
    }
    await browser.close();
};

function getNumber(expr: string) {
    const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
    let num = expr.match(NUMERIC_REGEXP);
    return +`${num[0]}.${num[1]}`;
}

export default timerTrigger;
