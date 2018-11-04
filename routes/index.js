var express = require('express');
var multer = require('multer');
// var upload = multer({dest:"./public/uploads/"});
var fs = require('fs');
var router = express.Router();

var filename = __dirname + '/../public/jsons/qr.json';

/* GET home page. */
router.get('/', function(req, res, next) {


    fs.readFile(filename, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            var url = require('url');
            var params = url.parse(req.url, true).query;
            var QR = params.QRId;
            var jsonObj = JSON.parse(data);
            var square = null;
            for(var i=0,size=jsonObj.length;i<size;i++){
                var one = jsonObj[i];
                var video = one.video;
                console.log(video);
                console.log('wivdeo')
                //what value you want
                if (QR == one.QRId) {
                    // res.url = req.url + '&video';
                    console.log(one.vedio);
                    video = './uploads/' + one.vedio;
                    res.render('index', { title: 'Express', video: video });
                    square = 1;
                    break;
                }
            }
            if(square != 1){
                res.render('index', { title: 'Express', video: './uploads/default1.mp4' });
            }
        }});
});

/* post. */

var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './public/uploads/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);  // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        const filenameArr = file.originalname.split('.');

        // cb(null, file.originalname + Date.now() + '.' + filenameArr[filenameArr.length-1]);
        var prex = '';
        if(filenameArr[filenameArr.length-1] == 'MOV'){
            prex = '.mp4';
        }
        cb(null, Date.now() + file.originalname + prex);
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

router.post('/',upload.single('avatar'), function(req, res, next) {
// router.post('/',upload, function(req, res, next) {

    var filename = __dirname + '/../public/jsons/qr.json';
    var  config;

    fs.readFile(filename, 'utf8', function readFileCallback(err, data){
        config = JSON.parse(data);
        var url = require('url');

        var params = url.parse(req.url, true).query;
        console.log(params);
        const filenameArr = req.file.filename.split('.');

        // cb(null, file.originalname + Date.now() + '.' + filenameArr[filenameArr.length-1]);
        var prex = '';
        if(filenameArr[filenameArr.length-1] == 'MOV'){
            prex = '.mp4';
        }

        var item = {'QRId': params.QRId, 'vedio': req.file.filename + prex};
        config.push(item);
        // console.log(config);
        fs.writeFile(filename, JSON.stringify(config),'utf8');
        console.log('sdsdsdsdsds');


    });

    console.log('zhif');
    console.log(req.files);
    console.log(req.file);
    res.send('ok');
});


module.exports = router;
