using System;
using Newtonsoft.Json;

namespace Integrations
{
    public class RateQuery
    {

        [JsonProperty("url")]
        public string Url;

        [JsonProperty("name")]
        public string Name;

        [JsonProperty("isin")]
        public string ISIN;

        [JsonProperty("current")]
        public int Current;

        [JsonProperty("deltaCurr")]
        public int DeltaCurr;

        [JsonProperty("deltaPercent")]
        public int DeltaPercent;

        [JsonProperty("date")]
        public DateTime Date;
    }
}