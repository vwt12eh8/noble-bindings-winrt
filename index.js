const events = require('events');
const util = require('util');

const NobleWinrt =  require('./build/Release/noble_winrt.node').NobleWinrt;

util.inherits(NobleWinrt, events.EventEmitter);

module.exports = NobleWinrt;
