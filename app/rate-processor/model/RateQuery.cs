using System;
using System.Text.Json.Serialization;

namespace Integrations
{
    public class RateQuery
    {

        [JsonPropertyName("url")]
        public string Url;

        [JsonPropertyName("name")]
        public string Name;

        [JsonPropertyName("isin")]
        public string ISIN;

        [JsonPropertyName("current")]
        public int Current;

        [JsonPropertyName("deltaCurr")]
        public int DeltaCurr;

        [JsonPropertyName("deltaPercent")]
        public int DeltaPercent;

        [JsonPropertyName("date")]
        public DateTime Date;
    }
}