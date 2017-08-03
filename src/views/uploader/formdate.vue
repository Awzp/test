<template>
  <div class='main'>
    <div class="upload">
      <form ref='form'>
        <input type="file" class="input1" name="image" ref="input1" @change="uploader">
      </form>
    </div>
    <img :src="uur" alt="">
  </div>
</template>

<script>
import {post} from 'common/js/api'
export default {
  data: function () {
    return {
      uur:'',
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log(1)
    })
  },
  methods: {
    show: function (e) {
      const that = this;
      var data = this.$refs.input1.files[0];
      var data2 = this.$refs.form;
      let formData = new FormData(data2);
      console.log(formData)
      post('json.php?do=Forum.Images.Upload',data2).then(r=>{
        console.log(r);
      });
      let oFReader = new FileReader();
      oFReader.readAsDataURL(data)
      oFReader.onload = function (oFREvent) {
        console.log(oFREvent)
        // that.uur = oFREvent.target.result;
      };
    },
    uploadFile (file) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST','/upload',true);
      var formData = new FormData();
      xhr.upload.onprogress = function(data){
        var per = Math.ceil((data.loaded/data.total)*100);
        //$('#'+file.uid+' .progress-bar').css('width',per+'%');
      }
      xhr.onreadystatechange = function() {
         if (xhr.readyState == 4 && xhr.status == 200) {
           // Every thing ok, file uploaded
             var res = JSON.parse(xhr.responseText);
             if(res.code ==200){
                 // upload success
             }
         }
      };
      formData.append("upload_file", file);
      formData.append("filename",file.name);
      xhr.send(formData);
    },
    uploader () {
      const that = this;
      let fileReader = new FileReader(),
          input = this.$refs.input1.files[0],
          img = new Image();
      if(input.type.indexOf('image') !=0) return;
      fileReader.readAsDataURL(input);

      let canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d');

      fileReader.onload = function (obj) {
        img.src = obj.target.result;
      }

      img.onload = function () {
        let imgW = this.width;
        let imgH = this.height;
        let maxWidth = 400,maxHeight = 400;
        let targetWidth = imgW,targetHeight = imgH;
        if(imgW > maxWidth || imgH > maxHeight) {
          if(imgW/imgH > maxWidth/maxHeight) {
            targetWidth = maxWidth;
            targetHeight = Math.round((imgH/maxHeight) *maxWidth);
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round((imgW/maxWidth)*maxHeight);
          }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.fillStyle = 'rgba(255,255,255,.4)';
        ctx.fillRect(0,0,targetWidth,targetHeight);
        ctx.drawImage(img,0,0,targetWidth,targetHeight);

        that.uur = canvas.toDataURL(input.type || 'image/png');

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
.upload {
  width: 200px;
  height: 100px;
  background-color: rgba(148,148,233,.4);
  position: relative;
  border: 1px solid #ccc;
  top: 100px;
  left: 100px;
}
.input1 {
  width: 200px;
  height: 100px;
  outline: none;
  opacity: 0;
  cursor: pointer;
}
</style>
