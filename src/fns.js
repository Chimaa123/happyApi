export function objectToStringArray(o) {
    const keyValuePairs = [];
    Object.keys(o).forEach((key) => {
        keyValuePairs.push(
            encodeURIComponent(key) + '=' + encodeURIComponent(o[key])
        );
    });
    return keyValuePairs;
}

export function objToQueryString(obj) {
    if (!obj) {
        return null;
    }
    let keyValuePairs = [];
    if (Array.isArray(obj)) {
        obj.forEach((o) => {
            keyValuePairs = [...keyValuePairs, ...objectToStringArray(o)];
        });
    } else {
        keyValuePairs = objectToStringArray(obj);
    }
    return '?' + keyValuePairs.join('&');
}
