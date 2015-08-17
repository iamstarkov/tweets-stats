import { equal, deepEqual } from 'assert';
import stats from './index';
import { own, replies, retweets } from './fixtures.json';
import { tweets as reality } from './fixtures-reality.json';

const tweets = [...own, ...replies, ...retweets];
const percent = tweets.length / 100;

it('should stats tweets', () =>
  equal(stats(tweets).tweets, tweets.length));

it('should stats own', () =>
  deepEqual(stats(tweets).own, {
    total: own.length,
    percent: (own.length / percent)
  }));

it('should stats replies', () =>
  deepEqual(stats(tweets).replies, {
    total: replies.length,
    percent: (replies.length / percent)
  }));

it('should stats retweets', () =>
  deepEqual(stats(tweets).retweets, {
    total: retweets.length,
    percent: (retweets.length / percent)
  }));

it('should stats retweeted', () =>
  deepEqual(stats(tweets).retweeted, {
    total: 121,
    average: 60.5
  }));

it('should stats favorited', () =>
  deepEqual(stats(tweets).favorited, {
    total: 5,
    average: 2.5
  }));

it('should stats reality check', () =>
  deepEqual(stats(reality), {
    "tweets": 192,
    "own": {
      "total": 90,  "percent": 46.88 },
    "replies": {
      "total": 66,  "percent": 34.38 },
    "retweets": {
      "total": 36,  "percent": 18.75 },
    "retweeted": {
      "total": 73,  "average": 0.81 },
    "favorited": {
      "total": 471, "average": 5.23 }
  }));

it('should stats invalid input', () =>
  equal(stats('unicorns'), undefined));

it('should stats invalid empty input', () =>
  equal(stats(), undefined));

it('should stats epmty array outcome valid props', () => {
  equal(stats([]).own.percent, 0);
  equal(stats([]).replies.percent, 0);
  equal(stats([]).retweets.percent, 0);
  equal(stats([]).retweeted.average, 0);
  equal(stats([]).favorited.average, 0);
});

it.skip('readme case', (done) => {
  const client = new Twitter(tokens);
  client.get('/statuses/user_timeline.json', { screen_name: 'POTUS' }, (err, tweets, raw) => {
    if (err) throw err;
    equal(stats(tweets), {});
  });
});
