'use strict';

const express = require('express');
const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const Excel = require('exceljs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { serveHTML('/', req, res) });
app.get('/help.html', (req, res) => { serveHTML('/help.html', req, res) });

app.post('/submit', upload.array(), (req, res, next) => { writeToExcel(req, res, next) });

const port = 3000;
app.listen(port, () => console.log(`Study Drug Label Creator listening on port ${port}.`));

function serveHTML(path, req, res) {
  const filePath = (path === '/') ? 'index.html' : path.slice(1);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
    }

    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}

function writeToExcel(req, res, next) {
  console.log(req.headers);
  console.log(req.body);

  const data = [];

  for (let key in req.body) {
    data.push(req.body[key]);
  }

  const workbook = new Excel.Workbook();

  workbook.xlsx.readFile('S:/MH-Pharmacy/Study Drug Label Creator/database.xlsx')
    .then(() => {
      const worksheet = workbook.getWorksheet('database');
      worksheet.addRow(data);
      workbook.xlsx.writeFile('S:/MH-Pharmacy/Study Drug Label Creator/database.xlsx');
    })
    .catch((err) => { console.error(err); });
}
