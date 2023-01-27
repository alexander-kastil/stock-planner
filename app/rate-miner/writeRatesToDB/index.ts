import { AzureFunction, Context } from '@azure/functions';

const queueTrigger: AzureFunction = async function (context: Context, RateItem: string): Promise<void> {
    context.log('Queue trigger function processed work item', RateItem);
};

export default queueTrigger;
