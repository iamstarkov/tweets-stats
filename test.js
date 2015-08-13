import { equal } from 'assert';
import tweetsStats from './index';

it('should tweetsStats', () =>
  equal(tweetsStats('unicorns'), 'unicorns'));

it('should tweetsStats invalid input', () =>
  equal(tweetsStats(), undefined));
