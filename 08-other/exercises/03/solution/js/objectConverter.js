const objectConverter = {
    arrayToMap(array) {
        const map = new Map();
        for (let i = 0; i < array.length; i++) {
            map.set(i, array[i])
        }
        return map
    },
    arrayToSet(array) { return new Set(array) },
    setToMap(set) {
        const map = new Map();
        const values = set.values()
        for (let i = 0; i < set.size; i++) {
            map.set(i, values.next().value)
        }
        return map
    },
    setToArray(set) { return Array.from(set) },
    mapToArray(map) {
        const array = [];
        map.forEach((value) => array.push(value));
        return array
    },
    mapToSet(map) {
        const set = new Set();
        const values = map.values();
        for (let i = 0; i < map.size; i++) {
            set.add(values.next().value)
        };
        return set
    }
}

export default objectConverter;
