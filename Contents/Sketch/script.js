var Document = require('sketch/dom').Document
var UI = require('sketch/ui')

var onRun = function(context) {
  // Get your active document
  var document = Document.getSelectedDocument()
  // Get selected layers
  var selection = document.selectedLayers

  // Loop over selection
  selection.forEach(function(object) {
    // Find the type of the parent of your selected layer
    var parent = object.parent;
    var parentType = parent.type;

    // If the parent is an artboard, go in!
    if (parentType === "Artboard") {
      // Find the artboard size
      var parentHeight = parent.frame.height;
      var parentWidth = parent.frame.width;
      // set the sizes for the layer
      object.frame.height = parentHeight;
      object.frame.width = parentWidth;
      // Position on the top left, so it covers the artboard
      object.frame.x = 0;
      object.frame.y = 0;
    } else {
      UI.message("It works only on unnested layers for now");
    }
  });

  function styleAsOverlay(object) {
    log(object.style.blendingMode);
  }

}