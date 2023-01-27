export class RateQuery {
    url: string;
    name: string;
    isin: string;
    current?: number;
    deltaCurr?: number;
    deltaPercent?: number;
    date?: Date;
}
