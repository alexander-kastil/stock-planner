# Apps

App can be created by executing `deploy/create-app.azcli`

## Rate Miner

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

## Rate Processor

Reads rates from a queue and writes them to a database.

### Setup   

```json
{
    "IsEncrypted": false,
    "Values": {
        "FUNCTIONS_WORKER_RUNTIME": "dotnet",
        "AzureWebJobsStorage": "<Storage Connection String>",
        "DatabaseConnectionString": "Data Source=localhost;Initial Catalog=stock-planner;Persist Security Info=True;User ID=<DBUser>;Password='<DBPassword>'"
    }
}
```