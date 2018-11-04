function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // $('#showvideo').attr('src', e.target.result);
            var obj;
            var formData = new FormData();
            formData.append('avatar', input.files[0]);
            $.ajax({
                url: '/index'+ window.location.search,
                type: 'post',
                cache: false,
                data: formData,
                dataType: 'text',//uploader.files[0].name.split('.')[1],
                processData: false,
                contentType: false,
                success: function (res) {
                    console.log('upload success');
                    //到这里图片已经上传成功了.你可根据返回结果处理其他的业务逻辑
                    alert('send successfully!');
                    if (res.status == 1) {
                        // todo something
                        // image.style.backgroundImage = 'url(' + img64 + ')';

                    }
                },
                error: function () {
                    console.log('upload faild');
                }
            });

        }

        reader.readAsDataURL(input.files[0]);
        console.log(reader);
    }
}

$("#capturevideo").change(function(){
    readURL(this);
});