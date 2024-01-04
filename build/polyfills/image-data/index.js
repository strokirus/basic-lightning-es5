function ImageDataPolyfill() {
  var args = [];
  for (var i = 0, len = arguments.length; i < len; i++) {
    // eslint-disable-next-line prefer-rest-params
    args.push(arguments[i]);
  }
  var data;

  if (args.length < 2) {
    throw new TypeError("Failed to varruct 'ImageData': 2 arguments required, but only ${args.length} present");
  }

  if (args.length > 2) {
    data = args.shift();

    if (!(data instanceof Uint8ClampedArray)) {
      throw new TypeError("Failed to varruct 'ImageData': parameter 1 is not of type 'Uint8ClampedArray'");
    }

    if (data.length !== 4 * args[0] * args[1]) {
      throw new Error("Failed to varruct 'ImageData': The input data byte length is not a multiple of (4 * width * height)");
    }
  }

  var width = args[0];
  var height = args[1];
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var imageData;
  if (ctx) {
    imageData = ctx.createImageData(width, height);
  }

  if (data && imageData) {
    imageData.data.set(data);
  }
  return imageData;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.ImageData = ImageDataPolyfill;
