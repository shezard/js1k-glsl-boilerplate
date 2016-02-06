# Simple boiler-plate for js1k GLSL demo

### Install

> npm install

### Minify

> grunt

Under the hood it will
- include *src/fragment.sh* into *build/js1k.js* (removing end of lines)
- minify *js1k.js*
- run jscrush on *build/js1k.min.js*
- include *js1k.crushed.js* into *index.html*

### Run

> grunt serve

### Todo

- Add a minification stage for the shader
- Display some size stats (e.g is final crushed file under 1ko)
- Replace jscrush by regpack
