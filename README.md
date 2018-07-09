# Getting started

There are three broad steps to getting started with the Google Analytics Realtime API.

## Create a [Google Analytics](https://www.google.com/analytics/analytics/#?modal_active=none) account for your website.

You don't need to add the provided `analytics.js` JavaScript snippet to your website just yet, but it'll be helpful to do so in order to work with some live data.

## Create a service account.

You'll use [Google's IAM console](https://console.developers.google.com/iam-admin/serviceaccounts) to do this. For more instructions, see [step 1 the Analytics quickstart guide](https://developers.google.com/analytics/devguides/reporting/core/v3/quickstart/service-php). Make sure "Furnish a new private key" is checked when you create the account and that it's in `JSON` format. On save, you'll be prompted to download the private key. Store it securely since you Google won't ever provide another copy. Then follow the steps to [add this service account](https://support.google.com/analytics/answer/1009702) to your Google Analytics account.

## Clone this repo and configure your credentials.

Add your service account's private key that you downloaded in the previous step as `private_key.json` in the `src` folder. **It's important that the file be called private_key.json so that it's ignored by .gitignore. If you choose to call it something else make sure to update .gitignore to ignore the file so that you don't accidentally upload its contents to a repo somewhere.**

After you've saved your private key, you can install the app's dependencies and do a dry run.

```shell
yarn install
yarn start
```

or if you're using npm:

```shell
npm install
npm start
```

Note that the `start` script will fail because `./src/index.ts` sends a query to the Realtime Reporting API but it needs a profile ID in order to properly make the request. You'll set that up in the next step.

# Querying the Realtime Reporting API.

In order to query your data you'll need a profile ID. You can find this under your Analytics dashboard, under Admin, then under View Settings, in the View column.

In the final part of the `main` function in `index.ts` replace the string assigned to `ids` with your profile ID in the format `ga:${PROFILE_ID}`.

Now you can successfully query your API with

```shell
yarn start
```

For more on querying the API visit the [Realtime Reporting API Explorer](https://developers.google.com/apis-explorer/#p/analytics/v3/analytics.data.realtime.get) and the [Realtime Reporting API Documentation](https://developers.google.com/analytics/devguides/reporting/realtime/v3/)
