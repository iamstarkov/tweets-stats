import { is } from 'ramda';

const isOwn = tweet => !isReply(tweet) && !isRetweet(tweet);
const isRetweet = tweet => !!tweet.retweeted_status;
const isSelfReply = tweet => tweet.user.id_str === tweet.in_reply_to_user_id_str;
const isReply = tweet => !!tweet.in_reply_to_screen_name && !isSelfReply(tweet);
const sumRetweeted = (state, tweet) => state + tweet.retweet_count;
const sumFavorited = (state, tweet) => state + tweet.favorite_count;

export default function tweetsStats(input) {
  if (!input || !is(Array, input)) return;

  var rt = 0;
  var fav = 0;

  const _tweets = input;

  const tweets = _tweets.length;
  const _ownTweets = _tweets.filter(isOwn);

  const percent = tweets / 100;
  const own = _ownTweets.length;
  const replies = _tweets.filter(isReply).length;
  const retweets = _tweets.filter(isRetweet).length;

  const ownPercentage = (own / percent) || 0;
  const repliesPercentage = (replies / percent) || 0;
  const retweetsPercentage = (retweets / percent) || 0;

  const retweeted = _ownTweets.reduce(sumRetweeted, 0);
  const favorited = _ownTweets.reduce(sumFavorited, 0);
  const retweetedKpi = Number(((retweeted / own) || 0).toFixed(2));
  const favoritedKpi = Number(((favorited / own) || 0).toFixed(2));

  return {
    tweets, own, replies, retweets,
    ownPercentage, repliesPercentage, retweetsPercentage,
    retweeted, favorited,
    retweetedKpi, favoritedKpi
  };
};
