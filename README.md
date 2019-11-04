# Insaurance-Assessment
### Prerequisites

- Install Npm Package `npm init`
- Install dependencies `npm install`
- Install Puppeteer `npm I puppeteer`


### Install dependencies

```
npm install
```
## Requirements

- Node 10.x
- User Account

### End to End Tests
The end to end tests are written in Javascript and webdriver Puppeteer. There is a folder node_modules which is not commited and pushed we need to do install npm to get the folder in local.



**Note**: If you want to run your test in browser and view them running set your headless: false in your jestpuppeteer.config.

**Note**: To debug the puppeteer test we use `await jestPuppeteer.debug()`.But you have can only debug your test if your set headless: false in your jestpuppeteer.config.js

**Note**: If you want to run your test in browser and view them running set your headless: false in your jestpuppeteer.config.