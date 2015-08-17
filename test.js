import { equal, deepEqual } from 'assert';
import stats from './index';
import { own, replies, retweets } from './fixtures.json';
import { tweets as reality } from './fixtures-reality.json';

const tweets = [...own, ...replies, ...retweets];
const percent = tweets.length / 100;

it('should stats tweets', () =>
  equal(stats(tweets).tweets, tweets.length));

it('should stats own', () =>
  equal(stats(tweets).own, own.length));

it('should stats replies', () =>
  equal(stats(tweets).replies, replies.length));

it('should stats retweets', () =>
  equal(stats(tweets).retweets, retweets.length));

it('should stats ownPercentage', () =>
  equal(stats(tweets).ownPercentage, replies.length / percent));

it('should stats repliesPercentage', () =>
  equal(stats(tweets).repliesPercentage, replies.length / percent));

it('should stats retweetsPercentage', () =>
  equal(stats(tweets).retweetsPercentage, retweets.length / percent));

it('should stats retweeted', () =>
  equal(stats(tweets).retweeted, 121));

it('should stats retweetedKpi', () =>
  equal(stats(tweets).retweetedKpi, 60.5));

it('should stats favorited', () =>
  equal(stats(tweets).favorited, 5));

it('should stats favoritedKpi', () =>
  equal(stats(tweets).favoritedKpi, 2.5));

it('should stats reality check', () =>
  deepEqual(stats(reality), {
    "tweets": 192,
    "own": 90,
    "replies": 66,
    "retweets": 36,
    "ownPercentage": 46.88,
    "repliesPercentage": 34.38,
    "retweetsPercentage": 18.75,
    "retweeted": 73,
    "favorited": 471,
    "retweetedKpi": 0.81,
    "favoritedKpi": 5.23
  }));

it('should stats invalid input', () =>
  equal(stats('unicorns'), undefined));

it('should stats invalid empty input', () =>
  equal(stats(), undefined));

it('should stats epmty array outcome valid props', () => {
  equal(stats([]).ownPercentage, 0);
  equal(stats([]).repliesPercentage, 0);
  equal(stats([]).retweetsPercentage, 0);
  equal(stats([]).retweetedKpi, 0);
  equal(stats([]).favoritedKpi, 0);
});

it.skip('readme case', (done) => {
  const client = new Twitter(tokens);
  client.get('/statuses/user_timeline.json', { screen_name: 'POTUS' }, (err, tweets, raw) => {
    if (err) throw err;
    equal(stats(tweets), {});
  });
});
