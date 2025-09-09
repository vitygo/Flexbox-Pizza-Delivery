/**
 * Parses a CSS-like string into a JavaScript object of properties and values.
 * This is resilient to different property order, extra whitespace, and case.
 *
 * @param {string} cssString The raw CSS string from the user input.
 * @returns {object} An object with cleaned property-value pairs.
 */
export const parseCSS = (cssString) => {
    const declarations = cssString.split(';').filter(item => item.trim() !== '');
    const parsedObject = {};
    declarations.forEach(declaration => {
        const parts = declaration.split(':');
        if (parts.length === 2) {
            const property = parts[0].trim().toLowerCase();
            const value = parts[1].trim().toLowerCase().replace(/['"]/g, '');
            parsedObject[property] = value;
        }
    });
    return parsedObject;
};

/**
 * Compares two objects to see if they are equal (ignoring key order).
 *
 * @param {object} obj1 The first object to compare.
 * @param {object} obj2 The second object to compare.
 * @returns {boolean} True if the objects are equal, false otherwise.
 */
export const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};