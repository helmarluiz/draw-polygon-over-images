# draw-polygon-over-image
Draw polygon over image using canvas, depend on jquery only, import and export json string.

# Features
<pre>
DRAW: polygon
DRAG: select the polygon and drag it to somewhere you want to
UNDO: by press CTRL+Z
SCALE: use the mouse wheel to scale the image and polygons
MAGNIFIER: by press "e" and click the mouse's left button
IMPORT: import the json string to auto draw the shapes
EXPORT: export the shapes as json string
VIEW: in the view mode, you cannot edit the shapes
SELECT: you can click the shape to select it, and drag it, or drag the picture
DELETE: you can delete the shape by select it and press "d"
REMOVE: remove one point of the polygon by right click it
</pre>

# usage
<pre>
function cb(ret) {
	console.log(ret);
}
$(document).ready(function() {
	var app = new painter();
	var json= '';
	app.run('image.jpg', json, cb);
});
</pre>


# Reference
- This project is a fork from: ([draw-polygon-over-images](https://github.com/kevnwei/draw-polygon-over-image))