# codemirror-typewriter-scrolling

CodeMirror addon adding typwritter-scrolling feature

## Installation

```
npm install codemirror-typewriter-scrolling
```

## Usage

``` js
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "markdown",
    typewriterScrolling: true // setOption
});
// empty line
editor.setValue((new Array(100)).join("\n"));
```

or

use `scrollSelectionToCenter` command.

``` js
editor.execCommand("scrollSelectionToCenter");
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT