import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { readFile } from 'fs/promises';
import { showTitle } from '../showTitle.js'
import assert from 'node:assert/strict';
const fs = require('fs');

//read csv file
const data = fs.readFileSync('./test/data.csv').toString();
let resdata = data.split("\r\n").map(function (line) {
    return line.split(";");
});

let priority = 0; //priority == 0 - all tests

for (let i = 0; i < resdata.length-1; i++) {
    if (resdata[i + 1][0] == priority || priority == 0) {
        describe( 'Title', function () {
            describe( '[Tilte_test_' + resdata[i + 1][1] + '][priority_' + resdata[i + 1][0] + '] title "' + resdata[i + 1][2] + '"', function () {
                it( 'should return: ' + resdata[i + 1][3], function () {
                    assert.equal(showTitle(resdata[i + 1][2]), resdata[i + 1][3]);
                } );
            } );
        } );

        describe( 'Length', function () {
            describe( '[Length_test_' + resdata[i + 1][1] + '][priority_' + resdata[i + 1][0] + '] title length "' + resdata[i + 1][2] + '"', function () {
                it( 'should return: ' + resdata[i + 1][3], function () {
                    assert.equal(showTitle(resdata[i + 1][2]).length, parseInt(resdata[i + 1][4]));
                    console.log('length ' + resdata[i+1][4]);
                } );
            } );
        } );
    } else i++;
}

