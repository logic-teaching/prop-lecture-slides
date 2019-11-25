// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var forms = require('bespoke-forms');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');

// Bespoke.js
var deck = bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  classes(),
  nav(),
  forms(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  multimedia(),
  extern(bespoke)
]);

var initialize = new Event('initialize');

deck.on('activate',function (e) {
    var list = deck.slides[e.index].getElementsByTagName("textarea")
    try {Array.from(list).forEach(function(e) {e.dispatchEvent(initialize)});} catch (e){}
});
