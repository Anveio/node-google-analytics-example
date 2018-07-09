import { google } from 'googleapis';
import { GoogleScope, Metrics } from './constants/enums';
// tslint:disable:no-console

async function main() {
  console.log('Authorizing client...');

  const auth = await google.auth.getClient({
    keyFile: __dirname + '/gcloud_api_key.json',
    scopes: GoogleScope.ANALYTICS_READONLY
  });

  console.log('Client authorized!');

  // The `analytics` object will now send along authorization with each query.
  const analytics = google.analytics({
    version: 'v3',
    auth
  });

  /**
   * See https://developers.google.com/apis-explorer/#p/analytics/v3/analytics.data.realtime.get
   */
  const { data } = await analytics.data.realtime.get({
    // The profile ID is found under Dashboard > Admin > View Settings
    ids: 'ga:178185000',
    metrics: Metrics.ACTIVE_USERS
  });

  console.log(data);
}

main().catch(console.error);
