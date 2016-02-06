# Simple boiler-plate for js1k GLSL demo

### Install

```npm install```

### Minify

```grunt```

Under the hood it will
- include *fragment.sh* into *build/js1k.js*
- minify *js1k.js* into *build/js1k.min.js*
- run jscrush on *build/js1k.min.js*
- include *build/js1k.crushed.js* into *build/index.html*

### Run

``` grunt serve```

### Todo

- Add a minification stage for the shader
- Display some size stats (e.g is final crushed file under 1ko)
