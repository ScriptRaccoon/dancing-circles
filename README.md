## Dancing circles

Browser game which lets you add circles which dance with each other. Try it out here at codesandbox:

https://4g6nl.codesandbox.io/

![Demo with 4 circles](docs/demo.gif)

_Rules._ When two circles are close to each other (distance is less than 50 pixels), they start to rotate around the midpoints of their midpoints (clockwise by default). When this rule is applied to many circles at a time, this can look like a dance.

Click the canvas to generate the next circle. In the header you can

-   set the size of the next circle
-   set the orientation of the next circle
-   toggle midpoint view
-   clear the canvas
-   remove the previous circle

In midpoint view you see the history of the midpoints of the circles, which can be interesting curves on their own.

Very interesting and non-predictable systems can arise already with 4 circles. Mixing clockwise and anticlockwise circles can produce chaos, wild dancing or even 'black holes'.
