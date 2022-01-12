import test from 'ava';
import ip from './index.js';

test('ip return type to be string', t => {
    t.is(typeof ip(), 'string');
});

