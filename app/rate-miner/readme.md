# Rate Miner

Update localsettings.json in Function App:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "<Storage Connection String>",
  }
}