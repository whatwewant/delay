# delay [![Build Status](https://travis-ci.org/zcorky/delay.svg?branch=master)](https://travis-ci.org/zcorky/delay)

> A simple promise delay

## Install

```
$ npm install @zcorky/delay
```


## Usage

```js
const delay = require('@zcorky/delay');

(async () => {
	bar();

	await delay(100);

	// Executed 100 milliseconds later
	baz();
})();
```

## Related

- [delay](https://github.com/sindresorhus/delay) - Delay a promise a specified amount of time

## License

MIT © [Moeover](https://moeover.com)