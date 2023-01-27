# Apps

App can be created by executing `deploy/create-app.azcli`

## RateMiner

Gets rates from a website and writes them to a database.

### Setup

Update localsettings.json in Function App:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "<Storage Connection String>",
  }
}
```