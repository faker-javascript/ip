import fakeIP from './index.js';
import test from 'ava';

test('fakeIP return type to be string', t => {
	t.is(typeof fakeIP(), 'string');
});

