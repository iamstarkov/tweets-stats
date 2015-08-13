import { equal } from 'assert';
import stats from './index';
import { own, replies, retweets } from './fixtures.json';

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
