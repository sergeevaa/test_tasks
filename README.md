# test_tasks

## Task

Any language can be used to complete the task, but avoid using language built-in functions, just low level code.

There is a website, where on the main page you need to show short titles of incoming articles.
Create function that receives article and returns short title according to the:
Full title should be no longer than len (e.g.25) symbols
If title longer than len (e.g.25) symbols than you need to show “...” at the end
Title should end on full word

Example:
You have an article: “Volvo released a new car with the following spec: V6 236HP. It will cost $22647 and going to be sold in New York only”
Title (if len = 25) should be: “Volvo released a new…”

Plus make code to call function to test it (unit test function), any number of tests to cover all cases.

Upload to github + instruction on how to compile the code.

Result should contain one function, a set of tests to test function and instruction on how to compile it.


## How to start
1. Install [node.js](https://nodejs.org)
2. Install [mocha](https://mochajs.org/#installation): 
```
$ npm install mocha 
```
3. Start test
```
$ npm test
```

## About files
* showTitle.js - general function 
* test/test.js - unit tests
* test/data.csv - data for unit tests 


## About me
Sergeeva Anastasiiaa: QA manager, QA lead, QA mentor

[Resume](https://sergeevaa.github.io/resume/#)
