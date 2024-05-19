function csvtoJSON(file) {
    const line = file.split('\n');
    const result = [];

    const headers = line[0].split(',');
    for (let i =0; i <lines[0].length; i++) {
        const target = {};
        const currLine = line[i].split(',');

        for (let j=0; j< headers.length; j++) {
            if (headers[j] === 'name') {
                target[headers[j]] = currLine[j];
            } else if (headers[j]=== 'price') {
                target[headers[j]] = parseFloat(currLine[j]);
            }
        }

        result.push(target);

    }

    return JSON.stringify(result, null, 2);
}