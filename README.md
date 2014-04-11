metalsmith-htmlescape
=====================

Converts files to have HTML escaped UTF-8 characters.
This is useful when your markdown files are being converted
to html.

Install
-------

```
npm install metalsmith-htmlescape
```

Usage
-----

```
var htmlescape = require('metalsmith-htmlescape');

.use(htmlescape())
```

CLI Usage
---------
Install via npm and add it to your `metalsmith.json`:
```
{
  "plugins": {
      "metalsmith-htmlescape": true
    }
}
```

License
-------

MIT
