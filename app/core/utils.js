
'use strict';

goog.provide('Blockly.utils');

goog.require('goog.dom');
goog.require('goog.events.BrowserFeature');
goog.require('goog.math.Coordinate');
goog.require('goog.userAgent');



Blockly.addClass_ = function(element, className) {
  var classes = element.getAttribute('class') || '';
  if ((' ' + classes + ' ').indexOf(' ' + className + ' ') == -1) {
    if (classes) {
      classes += ' ';
    }
    element.setAttribute('class', classes + className);
  }
};


Blockly.removeClass_ = function(element, className) {
  var classes = element.getAttribute('class');
  if ((' ' + classes + ' ').indexOf(' ' + className + ' ') != -1) {
    var classList = classes.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
      if (!classList[i] || classList[i] == className) {
        classList.splice(i, 1);
        i--;
      }
    }
    if (classList.length) {
      element.setAttribute('class', classList.join(' '));
    } else {
      element.removeAttribute('class');
    }
  }
};


Blockly.hasClass_ = function(element, className) {
  var classes = element.getAttribute('class');
  return (' ' + classes + ' ').indexOf(' ' + className + ' ') != -1;
};


Blockly.bindEvent_ = function(node, name, thisObject, func) {
  if (thisObject) {
    var wrapFunc = function(e) {
      func.call(thisObject, e);
    };
  } else {
    var wrapFunc = func;
  }
  node.addEventListener(name, wrapFunc, false);
  var bindData = [[node, name, wrapFunc]];
  // Add equivalent touch event.
  if (name in Blockly.bindEvent_.TOUCH_MAP) {
    wrapFunc = function(e) {
      // Punt on multitouch events.
      if (e.changedTouches.length == 1) {
        // Map the touch event's properties to the event.
        var touchPoint = e.changedTouches[0];
        e.clientX = touchPoint.clientX;
        e.clientY = touchPoint.clientY;
      }
      func.call(thisObject, e);
      // Stop the browser from scrolling/zooming the page.
      e.preventDefault();
    };
    for (var i = 0, eventName;
         eventName = Blockly.bindEvent_.TOUCH_MAP[name][i]; i++) {
      node.addEventListener(eventName, wrapFunc, false);
      bindData.push([node, eventName, wrapFunc]);
    }
  }
  return bindData;
};


Blockly.bindEvent_.TOUCH_MAP = {};
if (goog.events.BrowserFeature.TOUCH_ENABLED) {
  Blockly.bindEvent_.TOUCH_MAP = {
    'mousedown': ['touchstart'],
    'mousemove': ['touchmove'],
    'mouseup': ['touchend', 'touchcancel']
  };
}


Blockly.unbindEvent_ = function(bindData) {
  while (bindData.length) {
    var bindDatum = bindData.pop();
    var node = bindDatum[0];
    var name = bindDatum[1];
    var func = bindDatum[2];
    node.removeEventListener(name, func, false);
  }
  return func;
};


Blockly.fireUiEventNow = function(node, eventName) {
  // Remove the event from the anti-duplicate database.
  var list = Blockly.fireUiEvent.DB_[eventName];
  if (list) {
    var i = list.indexOf(node);
    if (i != -1) {
      list.splice(i, 1);
    }
  }
  // Fire the event in a browser-compatible way.
  if (document.createEvent) {
    // W3
    var evt = document.createEvent('UIEvents');
    evt.initEvent(eventName, true, true);  // event type, bubbling, cancelable
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    // MSIE
    var evt = document.createEventObject();
    node.fireEvent('on' + eventName, evt);
  } else {
    throw 'FireEvent: No event creation mechanism.';
  }
};


Blockly.fireUiEvent = function(node, eventName) {
  var list = Blockly.fireUiEvent.DB_[eventName];
  if (list) {
    if (list.indexOf(node) != -1) {
      // This event is already scheduled to fire.
      return;
    }
    list.push(node);
  } else {
    Blockly.fireUiEvent.DB_[eventName] = [node];
  }
  var fire = function() {
    Blockly.fireUiEventNow(node, eventName);
  };
  setTimeout(fire, 0);
};


Blockly.fireUiEvent.DB_ = {};


Blockly.noEvent = function(e) {
  // This event has been handled.  No need to bubble up to the document.
  e.preventDefault();
  e.stopPropagation();
};


Blockly.isTargetInput_ = function(e) {
  return e.target.type == 'textarea' || e.target.type == 'text' ||
         e.target.type == 'number' || e.target.type == 'email' ||
         e.target.type == 'password' || e.target.type == 'search' ||
         e.target.type == 'tel' || e.target.type == 'url' ||
         e.target.isContentEditable;
};


Blockly.getRelativeXY_ = function(element) {
  var xy = new goog.math.Coordinate(0, 0);
  // First, check for x and y attributes.
  var x = element.getAttribute('x');
  if (x) {
    xy.x = parseInt(x, 10);
  }
  var y = element.getAttribute('y');
  if (y) {
    xy.y = parseInt(y, 10);
  }
  // Second, check for transform="translate(...)" attribute.
  var transform = element.getAttribute('transform');
  var r = transform && transform.match(Blockly.getRelativeXY_.XY_REGEXP_);
  if (r) {
    xy.x += parseFloat(r[1]);
    if (r[3]) {
      xy.y += parseFloat(r[3]);
    }
  }
  return xy;
};


Blockly.getRelativeXY_.XY_REGEXP_ =
    /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;


Blockly.getSvgXY_ = function(element, workspace) {
  var x = 0;
  var y = 0;
  var scale = 1;
  if (goog.dom.contains(workspace.getCanvas(), element) ||
      goog.dom.contains(workspace.getBubbleCanvas(), element)) {
    // Before the SVG canvas, scale the coordinates.
    scale = workspace.scale;
  }
  do {
    // Loop through this block and every parent.
    var xy = Blockly.getRelativeXY_(element);
    if (element == workspace.getCanvas() ||
        element == workspace.getBubbleCanvas()) {
      // After the SVG canvas, don't scale the coordinates.
      scale = 1;
    }
    x += xy.x * scale;
    y += xy.y * scale;
    element = element.parentNode;
  } while (element && element != workspace.options.svg);
  return new goog.math.Coordinate(x, y);
};


Blockly.createSvgElement = function(name, attrs, parent, opt_workspace) {
  var e = /** @type {!SVGElement} */ (
      document.createElementNS(Blockly.SVG_NS, name));
  for (var key in attrs) {
    e.setAttribute(key, attrs[key]);
  }
  // IE defines a unique attribute "runtimeStyle", it is NOT applied to
  // elements created with createElementNS. However, Closure checks for IE
  // and assumes the presence of the attribute and crashes.
  if (document.body.runtimeStyle) {  // Indicates presence of IE-only attr.
    e.runtimeStyle = e.currentStyle = e.style;
  }
  if (parent) {
    parent.appendChild(e);
  }
  return e;
};


Blockly.removeAllRanges = function() {
  if (window.getSelection) {
    setTimeout(function() {
        try {
          var selection = window.getSelection();
          if (!selection.isCollapsed) {
            selection.removeAllRanges();
          }
        } catch (e) {
          // MSIE throws 'error 800a025e' here.
        }
      }, 0);
  }
};


Blockly.isRightButton = function(e) {
  if (e.ctrlKey && goog.userAgent.MAC) {
    // Control-clicking on Mac OS X is treated as a right-click.
    // WebKit on Mac OS X fails to change button to 2 (but Gecko does).
    return true;
  }
  return e.button == 2;
};


Blockly.mouseToSvg = function(e, svg) {
  var svgPoint = svg.createSVGPoint();
  svgPoint.x = e.clientX;
  svgPoint.y = e.clientY;
  var matrix = svg.getScreenCTM();
  matrix = matrix.inverse();
  return svgPoint.matrixTransform(matrix);
};


Blockly.shortestStringLength = function(array) {
  if (!array.length) {
    return 0;
  }
  var len = array[0].length;
  for (var i = 1; i < array.length; i++) {
    len = Math.min(len, array[i].length);
  }
  return len;
};


Blockly.commonWordPrefix = function(array, opt_shortest) {
  if (!array.length) {
    return 0;
  } else if (array.length == 1) {
    return array[0].length;
  }
  var wordPrefix = 0;
  var max = opt_shortest || Blockly.shortestStringLength(array);
  for (var len = 0; len < max; len++) {
    var letter = array[0][len];
    for (var i = 1; i < array.length; i++) {
      if (letter != array[i][len]) {
        return wordPrefix;
      }
    }
    if (letter == ' ') {
      wordPrefix = len + 1;
    }
  }
  for (var i = 1; i < array.length; i++) {
    var letter = array[i][len];
    if (letter && letter != ' ') {
      return wordPrefix;
    }
  }
  return max;
};


Blockly.commonWordSuffix = function(array, opt_shortest) {
  if (!array.length) {
    return 0;
  } else if (array.length == 1) {
    return array[0].length;
  }
  var wordPrefix = 0;
  var max = opt_shortest || Blockly.shortestStringLength(array);
  for (var len = 0; len < max; len++) {
    var letter = array[0].substr(-len - 1, 1);
    for (var i = 1; i < array.length; i++) {
      if (letter != array[i].substr(-len - 1, 1)) {
        return wordPrefix;
      }
    }
    if (letter == ' ') {
      wordPrefix = len + 1;
    }
  }
  for (var i = 1; i < array.length; i++) {
    var letter = array[i].charAt(array[i].length - len - 1);
    if (letter && letter != ' ') {
      return wordPrefix;
    }
  }
  return max;
};


Blockly.isNumber = function(str) {
  return !!str.match(/^\s*-?\d+(\.\d+)?\s*$/);
};


Blockly.tokenizeInterpolation = function(message) {
  var tokens = [];
  var chars = message.split('');
  chars.push('');  // End marker.
  // Parse the message with a finite state machine.
  // 0 - Base case.
  // 1 - % found.
  // 2 - Digit found.
  var state = 0;
  var buffer = [];
  var number = null;
  for (var i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (state == 0) {
      if (c == '%') {
        state = 1;  // Start escape.
      } else {
        buffer.push(c);  // Regular char.
      }
    } else if (state == 1) {
      if (c == '%') {
        buffer.push(c);  // Escaped %: %%
        state = 0;
      } else if ('0' <= c && c <= '9') {
        state = 2;
        number = c;
        var text = buffer.join('');
        if (text) {
          tokens.push(text);
        }
        buffer.length = 0;
      } else {
        buffer.push('%', c);  // Not an escape: %a
        state = 0;
      }
    } else if (state == 2) {
      if ('0' <= c && c <= '9') {
        number += c;  // Multi-digit number.
      } else {
        tokens.push(parseInt(number, 10));
        i--;  // Parse this char again.
        state = 0;
      }
    }
  }
  var text = buffer.join('');
  if (text) {
    tokens.push(text);
  }
  return tokens;
};


Blockly.genUid = function() {
  var length = 20;
  var soupLength = Blockly.genUid.soup_.length;
  var id = [];
  if (Blockly.genUid.crypto_) {
    // Cryptographically strong randomness is supported.
    var array = new Uint32Array(length);
    Blockly.genUid.crypto_.getRandomValues(array);
    for (var i = 0; i < length; i++) {
      id[i] = Blockly.genUid.soup_.charAt(array[i] % soupLength);
    }
  } else {
    // Fall back to Math.random for IE 10.
    for (var i = 0; i < length; i++) {
      id[i] = Blockly.genUid.soup_.charAt(Math.random() * soupLength);
    }
  }
  return id.join('');
};


Blockly.genUid.crypto_ = this.crypto;


Blockly.genUid.soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
