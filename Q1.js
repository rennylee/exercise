const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://asiayo.com/zh-tw/package/sport-activities/';

axios.get(url).then(res => {
    const html = res.data;
    const $ = cheerio.load(html)

    const activities = $('.event');
    const data = [];

    activities.each((index, element )=> {
        const name = $(element).find('.eventName').text().trim();
        const price = $(element).find('.eventPrice').text().trim();
        data.push({name,price});
    });

    const convertCSV = data.map(item => `${賽事名稱}\t${每人最低價}`).join('\n');
    fs.writeFileSync('activity.csv', convertCSV, 'utf-8');

    console.log('Data have been imported successfully');
}).catch(err => {
    console.log('failed',err);
})


