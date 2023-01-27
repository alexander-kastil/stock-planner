using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Integrations
{
    public class RateProcessor
    {
        private StockDataContext dc;

        public RateProcessor(StockDataContext context)
        {
            dc = context;
        }

        [FunctionName("processRates")]
        public void Run([QueueTrigger("rates", Connection = "AzureWebJobsStorage")]string item, ILogger log)
        {
            log.LogInformation($"C# Queue trigger starts processing: {item}");
            RateQuery rate = JsonSerializer.Deserialize<RateQuery>(item);

            StockPrice stockPrice = new StockPrice
            {
                ISIN = rate.ISIN,
                Current = rate.Current,
                DeltaCurrent = rate.DeltaCurr,
                DeltaPercent = rate.DeltaPercent,
                Date = rate.Date
            };

            dc.StockPrices.Add(stockPrice);
            dc.SaveChanges();   
            log.LogInformation($"C# Queue trigger function processed: {item}");     
        }
    }
}
