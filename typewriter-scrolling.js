/**
 * LICENSE : MIT
 */
"use strict";
(function (mod) {
    if (typeof exports == "object" && typeof module == "object") {
        mod(require("codemirror"));
    }
    else if (typeof define == "function" && define.amd) {
        define(["codemirror"], mod);
    }
    else {
        mod(CodeMirror);
    }
})(function (CodeMirror) {
    "use strict";
    CodeMirror.commands.scrollSelectionToCenter = function (cm) {
        if (cm.getOption("disableInput")) {
            return CodeMirror.Pass;
        }
        var cursor = cm.getCursor('anchor');
        var top = cm.charCoords({line: cursor.line, ch: 0}, "local").top;
        var halfWindowHeight = cm.getWrapperElement().offsetHeight / 2;
        var scrollTo = Math.round((top - halfWindowHeight));
        cm.scrollTo(null, scrollTo);
    };
    CodeMirror.defineOption("typewriterScrolling", false, function (cm, val, old) {
        if (old && old != CodeMirror.Init) {
            cm.off("changes", onChanges);
        }
        if (val) {
            cm.on("changes", onChanges);
        }
    });
    function onChanges(cm, changes) {
        if (cm.getSelection().length !== 0) {
            return;
        }
        for (var i = 0, len = changes.length; i < len; i++) {
            var each = changes[i];
            if (each.origin === '+input' || each.origin === '+delete') {
                cm.execCommand("scrollSelectionToCenter");
                return;
            }
        }
    }
});
