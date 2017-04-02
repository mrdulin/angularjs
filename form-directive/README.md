# angular表单demos

除非`form`元素上有`action`属性，并指定了地址，否则`Angular`会阻止表单的默认行为。
>>>>>>> ngform/master

提交表单，你可以使用以下两种方法中的一种：

* 在`form`元素上添加`ngSubmit`指令
* 在表单中`type`是`submit`的`button`或是`input`元素上添加`ngClick`指令

为了避免同时触发这两个方法，请使用`ngSubmit`和`ngClick`指令中的其中一个。

触发表单提交行为有以下三种：

1.  如果一个表单`form`只有一个`input`输入域，当该输入处于焦点时，按回车键就会触发表单提交行为(触发`ngSubmit`)
2.  如果一个表单`form`有两个`input`输入域，但是没有`type`类型为`submit`的`button`或`input`，按回车键不会触发表单提交行为
3.  如果一个表单有一个或多个`input`输入域，并且有一个或多个`type`类型为`submit`的`button`和`input`，在任意一个处于焦点状态的`input`输入域中按回车，将会触发`click`事件(`ngClick`)和表单`form`上的`ngSubmit`事件。
