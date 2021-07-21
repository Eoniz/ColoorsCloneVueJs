import colorNamer from 'color-namer';

export const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

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
            confidence: Math.floor(100 - ((meta[2] * meta[1]) / 100)),
            textColor: (R*0.299 + G*0.587 + B*0.114) > 186 ? "#000" : "#fff"
        });
    }

    return palette;
};

