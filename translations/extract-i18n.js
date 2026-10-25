'use strict';

const path = require('path');
const { writeExports } = require('./extract-i18n-lib.js');

writeExports({
    html: path.join(__dirname, '..', 'merger.html'),
    format: 'inline-js',
    dataVar: 'I18N_MERGER_DATA',
});
