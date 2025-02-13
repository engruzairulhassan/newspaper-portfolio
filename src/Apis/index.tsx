import axios from 'axios';

function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(','); // Split the row, handling '\r' characters
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}


export default function FetchCSVData() {
    console.log("ppppppaa")
    const csvUrl = 'https://script.google.com/macros/s/AKfycbw3HmNqhFJf8zZuUdDN4fLTJ2SOVH1A3wy25USRo0ZcdKh39GgJy0mkODhoJfpkX9KShQ/exec'; // Replace with your Google Sheets CSV file URL
    axios.get(csvUrl)
    .then((response) => {
        // const parsedCsvData = parseCSV(response.data);
        // setCsvData(parsedCsvData);
        console.log("ppppooo", response);
    })
    .catch((error) => {
        console.error('Error fetching CSV data:', error);
    });
};
