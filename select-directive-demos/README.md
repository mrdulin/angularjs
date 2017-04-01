# angular select directive demos

ngOptions指令用来在`select`元素中动态生成`option`元素。

也可以在`option`元素上使用`ngRepeat`指令，可以得到相同的结果。

然而，使用`ngOptions`指令有一些好处，例如更少的内存占用，更好的性能，

因为`ngRepeat`会给每一个`repeat`出来的元素创建一个新的作用域`scope`。

此外，`ngOptions`更具灵活性，它使`select`元素知道如何通过`select as`去

给的`ng-model`指令所指定的`model`赋值。

当`select`元素上的`ng-model`需要绑定一个非字符串的`model`时，应该使用

`ngOptions`。


当`select`中的一个菜单项被选中时，该菜单项绑定的数组元素或是对象的属性将会被绑定到`select`的`ng-model`所指定的`model`上。

可选地，通过硬编码放一个`option`元素在`select`中，这个`option`元素的`value`属性是空字符串。这个`option`会被认为是为选择`option`。
