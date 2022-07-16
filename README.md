# Grapesjs Dynamic Components

Switch component type based on where a block is dropped

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-dynamic-components"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-dynamic-components'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-dynamic-components`
* Components
    * `dynamic`



## Options

| Option | Description | Default |
|-|-|-
| `dynamicName` | Name of dynamic component | `dynamic` |
| `dynamicOpts` | Options for extending dynamic component | `{}` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-dynamic-components`
* NPM
  * `npm i grapesjs-dynamic-components`
* GIT
  * `git clone https://github.com/documint-me/grapesjs-dynamic-components.git`


## Defining Blocks

Define block with type dynamic and define which component to use for a given set of parent components
```js
const bm = editor.Blocks;

bm.add('dynamic-content', {
  label: 'Dynamic Content',
  content: {
    type: 'dynamic',
    switch: [{
        parents: ['cont'], // List of parent component types 
        type: 'test' // Type to use given above parent components
      },
      {
        parents: ['cont2'],
        type: 'test2'
      }
    ]
  }
});
```

## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-dynamic-components.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-dynamic-components'],
      pluginsOpts: {
        'grapesjs-dynamic-components': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-dynamic-components';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/documint-me/grapesjs-dynamic-components.git
$ cd grapesjs-dynamic-components
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
