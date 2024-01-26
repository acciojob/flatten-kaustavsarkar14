//your JS code here. If required.
function flattenArray(arr) {
    let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else if (element && typeof element === 'object') {
            result.push(flattenObject(element));
        } else {
            result.push(element);
        }
    });

    return result;
}

function flattenObject(obj) {
    let result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const flattenedSubObject = flattenObject(value);
                for (const subKey in flattenedSubObject) {
                    if (flattenedSubObject.hasOwnProperty(subKey)) {
                        result[subKey] = flattenedSubObject[subKey];
                    }
                }
            } else if (Array.isArray(value)) {
                result[key] = flattenArray(value);
            } else {
                result[key] = value;
            }
        }
    }

    return result;
}

function flatten(value) {
    if (Array.isArray(value)) {
        return flattenArray(value);
    } else if (value && typeof value === 'object') {
        return flattenObject(value);
    } else {
        // The value is a primitive; return it as is.
        return value;
    }
}

module.exports=flatten;
