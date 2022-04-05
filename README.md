## Dancing circles

Browser game which lets you create circles which dance with each other.

https://dancing-circles.netlify.app

_Rules._ When two circles are close to each other (say, less than 100 pixels), they start to rotate around the midpoint of their midpoints (clockwise by default). Circles which get outside of the canvas are removed.

When these rules are applied to many circles at a time, it produces a complex movement. Very interesting and non-predictable systems can arise already with 4 circles.

![Demo with 4 circles](./img/demo1.gif)

Mixing clockwise and anticlockwise circles can produce chaos, wild dancing or even 'black holes': these are groups of fast rotating circles which converge towards a point and suck in all nearby circles.

![Demo of black hole](./img/demo2.gif)

Click the canvas anywhere to generate a new circle at this point. In the menu you can adjust the size and the orientation of the next circle, adjust the global dance threshold, remove the last circle or even all circles, toggle trails of the circles and toggle lines between dancing circles.

![Demo of lines](./img/demo3.gif)

![Demo of trails](./img/demo4.gif)
