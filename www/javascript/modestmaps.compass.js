// This is Carden's original MapControls thingy tweaked just enough to look
// like the Polymaps compass thingy.

// namespacing!

if (!com){
    var com = {};

    if (!com.modestmaps){
        com.modestmaps = {};
    }
}

com.modestmaps.Compass = function(map){

    // get your div on
    
    this.div = document.createElement('div');
    this.div.setAttribute('id', 'modestmaps_compass');
    this.div.style.position = 'absolute';
    this.div.style.left = '0px';
    this.div.style.top = '0px';
    this.div.style.zIndex = '500';	// it's like numbering lines in a BASIC program...
    map.parent.appendChild(this.div);

    this.canvas = Raphael(this.div, 200, 100);

    // zoom in (background and "+" symbol)

    var zin = this.canvas.path("M-12,0V-12A12,12 0 1,1 12,-12V0Z").translate(25, 36);
    zin.attr("fill", "#ccc");
    zin.attr("stroke", "#fff");
    zin.attr("stroke-width", 3);
	
    var zina = this.canvas.path("M -5 0 L 5 0 M 0 -5 L 0 5").translate(25, 25);
    zina.attr("stroke", "#fff");
    zina.attr("stroke-width", 2);

    // zoom out (background and "-" symbol)

    var zout = this.canvas.path("M-12,0V-12A12,12 0 1,1 12,-12V0Z").translate(25, 60).rotate(180);
    zout.attr("fill", "#ccc");
    zout.attr("stroke", "#fff");
    zout.attr("stroke-width", 3);

    var zouta = this.canvas.path("M -5 0 L 5 0").translate(25, 47);
    zouta.attr("stroke", "#fff");
    zouta.attr("stroke-width", 2);

    zin.click(function(){
	    map.zoomIn();
    });

    zina.click(function(){
	    map.zoomIn();
    });

    zout.click(function(){
	    map.zoomOut();
    });

    zouta.click(function(){
	    map.zoomOut();
    });

};

com.modestmaps.Compass.prototype = {
    div: null,
    canvas: null
};