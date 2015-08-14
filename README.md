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
import tweetsStats from 'tweets-stats';

stats([/*…*/]);
/* {
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
} */
```

## API

### tweetsStats(input)

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
