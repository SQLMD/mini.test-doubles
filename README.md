## Ghibliator
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

You are hired by Studio Ghibli to help fix their test suite.

They have a large database of movies and characters, and they wrote a program to query it for various information.

Luckily they have also written tests! Unfortunately, the test suite has become terribly so, because they only test for state, and not behavior, and because they read the entire database from disk for each test.

## Your Task

Your mission (and you must choose to accept it), is to refactor their tests to use [sinon](http://sinonjs.org/) to replace all file system access with test doubles during the test.

Refactor their tests from TDD to BDD:

* Select mocks, stubs, or spies as appropriate for each test
* Use test doubles to prevent any real disk access from occurring
* Set up _the minimal state_ necessary in your test! Don't stub the whole file!
* Use test values that are easy to reason about
* Read [When to use mocks, stubs, and spies in Sinon](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
* Be sure to read the documentation on [stubs](http://sinonjs.org/releases/v1.17.7/stubs/)

## Resources

* http://sinonjs.org/releases/v2.3.8/spies/
* https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
* http://pyvideo.org/pycon-us-2012/fast-test-slow-test.html
