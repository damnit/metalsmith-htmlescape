metalsmith-specialhtml
======================

Converts files to have HTML escaped UTF-8 characters.
This is useful when your markdown files are being converted
to html.

Install
-------

```
npm install metalsmith-specialhtml
```

Usage
-----

```
var specialhtml = require('metalsmith-specialhtml');

.use(specialhtml())
```

CLI Usage
---------
Install via npm and add it to your `metalsmith.json`:
```
{
  "plugins": {
      "metalsmith-specialhtml": true
    }
}
```

License
-------

MIT
