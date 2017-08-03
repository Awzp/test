var myImage = new Image;

myImage.src = “images / myImage.png”;

function ImagePreloader(images, callBack) {
  // store the callBack
  this.callBack = callBack;

  // initialize internal state.

  this.nLoaded = 0;

  this.nProcessed = 0;

  this.aImages = new Array;

  // record the number of images.

  this.nImages = images.length;

  // for each image, call preload()

  for (var i = 0; i < images.length; i++){

    this.preload(images[i]);
  }





ImagePreloader.prototype.preload = function(image)

{

  // create new Image object and add to array

  var oImage = new Image;

  this.aImages.push(oImage);



  // set up event handlers for the Image object

  oImage.onload = ImagePreloader.prototype.onload;

  oImage.onerror = ImagePreloader.prototype.onerror;

  oImage.onabort = ImagePreloader.prototype.onabort;



  // assign pointer back to this.

  oImage.oImagePreloader = this;

  oImage.bLoaded = false;



  // assign the .src property of the Image object

  oImage.src = image;

}
