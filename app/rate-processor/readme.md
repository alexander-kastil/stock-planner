# Rate Processor

Update localsettings.json in Function App:

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