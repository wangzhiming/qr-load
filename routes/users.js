var express = require('express');
var router = express.Router();
var fs = require('fs');
var filename = __dirname + '/../public/jsons/qr.json';

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('usersssssss');
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
                    video = './uploads/' + video;
                    res.send(video);
                    square = 1;
                    break;
                }
            }
            if(square != 1){
                // res.render('index', { title: 'Express', video: 'default.mp4' });
            }
        }});

  // res.send('respond with a resource');
});

module.exports = router;
