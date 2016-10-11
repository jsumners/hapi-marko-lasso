# Hapi + Marko + Lasso

This repository provides a bare bones example showing how [Hapi][hapi],
[Marko][marko], and [Lasso][lasso] can be used to build a website. It shows
several things:

+ Using a the Marko [layout taglib][layoutlib]
+ Compartmentalizing pages into their own module-like layout
+ Lassoing a page without dependencies (`/`)
+ Lassoing a page with external dependencies (`/one`)

[hapi]: http://hapijs.com/
[marko]: http://markojs.com/
[lasso]: https://github.com/lasso-js/lasso
[layoutlib]: http://markojs.com/docs/marko/layout-taglib/

## Trying It Out

1. Clone this repository
2. `npm install`
3. `node server.js`
4. Copy the URI written to the console and paste it into a web browser
