import colorNamer from 'color-namer';

export const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const sortColors = function(colors) {
    for (var c = 0; c < colors.length; c++) {
      /* Get the hex value without hash symbol. */
      var hex = colors[c].hex.substring(1);
       
      /* Get the RGB values to calculate the Hue. */
      var r = parseInt(hex.substring(0,2),16)/255;
      var g = parseInt(hex.substring(2,4),16)/255;
      var b = parseInt(hex.substring(4,6),16)/255;
   
      /* Getting the Max and Min values for Chroma. */
      var max = Math.max.apply(Math, [r,g,b]);
      var min = Math.min.apply(Math, [r,g,b]);
   
      /* Variables for HSV value of hex color. */
      var chr = max-min;
      var hue = 0;
      var val = max;
      var sat = 0;
   
      if (val > 0) {
        /* Calculate Saturation only if Value isn't 0. */
        sat = chr/val;
        if (sat > 0) {
          if (r == max) { 
            hue = 60*(((g-min)-(b-min))/chr);
            if (hue < 0) {hue += 360;}
          } else if (g == max) { 
            hue = 120+60*(((b-min)-(r-min))/chr); 
          } else if (b == max) { 
            hue = 240+60*(((r-min)-(g-min))/chr); 
          }
        }
      }
       
      /* Modifies existing objects by adding HSV values. */
      colors[c].hue = hue;
      colors[c].sat = sat;
      colors[c].val = val;
    }
   
    /* Sort by Hue. */
    return colors.sort(function(a,b){return a.hue - b.hue;});
  }

export const generateRandomPalette = (n) => {
    const mixR = Math.floor(Math.random() * 255);
    const mixG = Math.floor(Math.random() * 255);
    const mixB = Math.floor(Math.random() * 255);

    const palette = [];
    for (let i = 0; i < n; i++) {
        const R = Math.floor((mixR + Math.random() * 255) / 2);
        const G = Math.floor((mixG + Math.random() * 255) / 2);
        const B = Math.floor((mixB + Math.random() * 255) / 2);

        const hex = rgbToHex(R, G, B);
        const names = colorNamer(hex);

        const arrays = Object.values(names).reduce(
            (prev, curr) => {
                return [...prev, ...curr];   
            }, []);
        
        const meta = arrays.reduce((prev, curr) => {
            if (prev[1] < curr.distance) {
                return [prev[0], curr.distance, prev[2]];
            }

            if (prev[2] > curr.distance) {
                return [curr.name, prev[1], curr.distance];
            }
            return prev;
        }, ["", 0, Number.MAX_VALUE]);

        palette.push({
            rgb: [R, G, B],
            hex: hex,
            name: meta[0],
            luma: 0.3 * R + 0.59 * G + 0.11 * B,
            confidence: Math.floor(100 - ((meta[2] * meta[1]) / 100)),
            textColor: (R*0.299 + G*0.587 + B*0.114) > 186 ? "#000" : "#fff"
        });
    }

    return sortColors(palette);
};

