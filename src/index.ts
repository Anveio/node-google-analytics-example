import { google } from 'googleapis';
// tslint:disable:no-console

async function main() {
  console.log('Authorizing client...');
  const auth = await google.auth.getClient({
    keyFile: __dirname + '/gcloud_api_key.json',
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/compute']
  });

  const analytics = google.analytics({
    version: 'v3',
    auth
  });

  console.log('Client authorized!');

  const analyticsData = await analytics.data.realtime;

  console.log(analyticsData);
}

main().catch(console.error);
