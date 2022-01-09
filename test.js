import ip from './index.js';
import test from 'ava';

test('ip return type to be string', t => {
	t.is(typeof ip(), 'string');
});

