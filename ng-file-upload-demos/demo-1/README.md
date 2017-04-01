# 带上传按钮的上传表单，带预览图，单文件上传，重置

 `Content-Type`为`multipart/form-data; boundary=----WebKitFormBoundaryfV1qiZxXFMXmwzTq`
 
  _部分指令说明:_
  
  `ngf-select` 当文件被选择或清空时触发 
  `ng-model` 将验证合法的文件绑定到作用域模型 
  `accept` 当用户打开文件选择时，只能看到和选择指定类型的文件 
  `ngf-pattern` 对用户选择的文件的类型进行验证 
  `ngf-max-size` 单个文件允许的文件大小，可以通过`form.file.$error.maxSize=true`来验证 
  `ngf-min-size` 单个文件允许的文件大小，通过`form.file.$error.minSize=true`来验证 
  `ngf-max-height` 只对图片类型的文件有效，允许图片的最大高度，单位像素(px)
  `ngf-min-height` 只对图片类型的文件有效，允许图片的最小高度，单位像素(px)
  `ngf-max-width` 同上
  `ngf-min-width` 同上