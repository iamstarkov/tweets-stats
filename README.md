# tweets-stats

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get statistics from array of tweets

## Install

    npm install --save tweets-stats

## Usage

```js
import Twitter from 'twitter';
import tokens from 'twitter-tokens';
import stats from 'tweets-stats';

const client = new Twitter(tokens);
client.get('/statuses/user_timeline.json', { screen_name: 'POTUS' }, (err, tweets, raw) => {
  if (err) throw err;
  stats(tweets); /* {
    "tweets": 20,
    "own": {
      "total": 19
      "percent": 95.00 },
    "replies": {
      "total": 0
      "percent": 0.00 },
    "retweets": {
      "total": 1
      "percent": 5.00 },
    "retweeted" {
      "total": 158764,
      "kpi": 8356 },
    "favorited": {
      "total": 85888,
      "kpi": 4520.42 }}
  */
});
```

## API

### stats(input)

Return `Object` with these fields:

* `tweets, own, replies, retweets` — number of all tweets and per each categorie
* `ownPercentage, repliesPercentage, retweetsPercentage` — prev numbers in proportion to all tweets
* `retweeted, favorited` — retweet/favorited sum of input tweets
* `retweetedKpi, favoritedKpi` — prev sums divided by number of all tweets

#### input

*Required*  
Type: `Array`

Array of tweets from Twitter API. Take a look at [get-tweets][get-tweets].

[get-tweets]: https://github.com/iamstarkov/get-tweets

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/tweets-stats
[npm-image]: https://img.shields.io/npm/v/tweets-stats.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/tweets-stats
[travis-image]: https://img.shields.io/travis/iamstarkov/tweets-stats.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/tweets-stats
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/tweets-stats.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/tweets-stats
[depstat-image]: https://david-dm.org/iamstarkov/tweets-stats.svg?style=flat-square
