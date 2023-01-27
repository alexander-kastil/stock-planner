# Deployment

App can be created by executing `create-app.azcli`. It creates:

- Resource Group
- Storage Account with a queue
- Two Function Apps (not used yet)
- Azure Static Web App to host the UI

## Setup

A database backupp is provided in `deploy\db-backup\stock-planner.bak`. It can be restored to a local SQL Server 2022 instance.