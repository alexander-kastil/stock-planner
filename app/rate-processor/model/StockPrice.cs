using System;

namespace Integrations
{
    public class StockPrice{

        public int ID { get; set; }

        public string ISIN { get; set; }

        public DateTime Date { get; set; }

        public decimal Current { get; set; }

        public decimal DeltaCurrent { get; set; }

        public decimal DeltaPercent { get; set; }
    }
}