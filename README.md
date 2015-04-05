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
      "average": 8356 },
    "favorited": {
      "total": 85888,
      "average": 4520.42 }}
  */
});
```

## API

### stats(input)

Return `Object` with fields:

* `tweets` number of all tweets in input
* `own` object representing author’s own tweets, with fields:
  * `total` number of own tweets
  * `percent` the percentage of own tweets from the total number of all tweets
* `replies` object representing author’s replies to others, with fields:
  * `total` number of replies
  * `percent` the percentage of replies from the total number of all tweets
* `retweets` object representing author’s retweets of other’s tweets, with fields:
  * `total` number of retweets
  * `percent` the percentage of retweets from the total number of all tweets
* `retweeted` object representing author’s tweets retweeted by others, with fields:
  * `total` how much own tweets have been retweeted in total
  * `average` how much own tweets have been retweeted in average per one tweet
* `favorited` object representing author’s tweets favorited by others, with fields:
  * `total` how much own tweets have been favorited in total
  * `average` how much own tweets have been favorited in average per one tweet

#### input

*Required*  
Type: `Array`

Array of tweets from [Twitter rest API][rest], basically from [user_timeline][timeline] endpoint. To make you life easier take a look at [node-twitter][node-twitter], [twit][twit] or [get-tweets][get-tweets] modules.

[rest]: https://dev.twitter.com/rest/public
[timeline]: https://dev.twitter.com/rest/reference/get/statuses/user_timeline
[node-twitter]: https://github.com/desmondmorris/node-twitter/
[twit]: https://github.com/ttezel/twit
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
