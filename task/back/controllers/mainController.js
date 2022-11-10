const fileFolder = "./images"
const fs = require('fs')
const path = require("path")

module.exports = {
    fileList: async (req, res) => {

        let filesObj = []

        const directoryPath = path.join(fileFolder);

        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                filesObj.push({name:file, active: true})
                // console.log(...filesObj);
            });
            res.send(filesObj)
        });
    },
    scanFiles: async (req, res) => {
        const {name, active} = req.body
        console.log(req.body)

        let filesObj2 = []

        const directoryPath = path.join(fileFolder);

        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file2) {
                filesObj2.push({name:file2, active: true})
                // console.log(...filesObj);
            });
            // function getDifference(filesObj, filesObj2) {
            //     return filesObj.filter(file => {
            //         return !filesObj2.some(file2 => {
            //             return file.name === file2.name;
            //             if (file.name !=== file2.name) {
            //                 filesObj2.push({name:file, active: false})
            //             }
            //         });
            //     });
            // }
            // getDifference()
            // res.send(filesObj2)
        });
    }
}

