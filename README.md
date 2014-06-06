Who Am I?
=========
"Who Am I?" is a small website that determines your interests by
exploiting a:visited in CSS.

It was originally written as a proof-of-concept for a few people on IRC.

I would suggest that you don't run update.py too often, as it does not use
an official feedly API, and I don't want to spam their servers.

This is basically a rewrite of the [original](http://tinsnail.neocities.org),
and should return better results.


FAQ
===

### Can't you get the square color automatically?

No, all links are treated the same from JS for this very reason.
This includes taking a "screenshot" from Javascript.


### I cloned the repo but the code doesn't work!

The website uses AJAX, so it needs to be run from a server.
If it still does not work, file an issue.

### None of my squares are red

Squares turn red based on your browser history. If you don't have any history
(or you are in Incognito / Private mode) then it will not work.

It will also not work if you have visited link colors disabled in Firefox.


License
=======

MIT

