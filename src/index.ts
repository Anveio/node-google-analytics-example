import { google } from 'googleapis';
import { GoogleScope } from './constants/enums';
// tslint:disable:no-console

async function main() {
  console.log('Authorizing client...');
  const auth = await google.auth.getClient({
    keyFile: __dirname + '/gcloud_api_key.json',
    scopes: GoogleScope.ANALYTICS_READONLY
  });

  const analytics = google.analytics({
    version: 'v3',
    auth
  });

  console.log('Client authorized!');

  const analyticsData = analytics.data.realtime;

  console.log(analyticsData);
}

main().catch(console.error);
