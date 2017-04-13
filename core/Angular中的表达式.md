`Angular`中的表达式和`JavaScript`表达式类似，经常在`{{ expression }}`中使用。以下是`Angular`中合法的表达式：

`1+2`

`a+b`

`user.name`

`items[index]`

`Angular`表达式 vs. `JavaScript`表达式

`Angular`中的表达式又不完全和`JavaScript`表达式相同，有以下几点不同：

1.  __上下文：__`JavaScript`表达式执行的上下文是window，而`Angular`表达式执行的上下文是表达式所在的`scope`对象。

2.  __容错：__在`JavaScript`中，如果一个表达式中的某个对象有未定义的属性，这个表达式会报错，如`ReferenceError`错误和`TypeError`错误。而``Angular``中，这种表达式最终会得出`undefined`和`null`值。因此在视图渲染时，不用担心某个对象中的属性不存在而导致报错。

3.  __表达式中不能使用流程控制语句：__不能在`Angular`表达式中使用这些语句：条件判断，循环，抛出异常。

4.  __表达式中不能使用函数声明：__不能在`Angular`表达式中使用函数声明，即使是在ng-init指令中。

5.  __表达式中不能使用正则表达式：__不能在`Angular`表达式中使用正则表达式。

6.  __表达式中不能有逗号或者`void`运算符：__不能在`Angular`表达式中使用,，或者void。

7.  __可以在表达式中使用过滤器`filter`：__可以在`Angular`表达式中使用过滤器`filter`来格式化数据。

如果你想执行复杂的`JavaScript`代码，你应该将这些代码放在控制器`Controller`中，然后在视图`view`上进行调用。如果你想`eval`一个`Angular`表达式，使用$eval()方法。下面举一些例子：

例一：
```html
<span>
  1+2={{1+2}}
</span>
```
结果：
```
1+2=3
```
例二：
```html
<div ng-controller="ExampleController" class="expressions">
  Expression:<code>{{expr}}</code> => <span ng-bind="$parent.$eval(expr)"></span>
</div>
```
```js
angular
  .module('expressionExample', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.expr = '3*10|currency';
  }]);
```
结果:
```
Expression: 3*10|currency => $30.00
```

* __关于上下文`Context`：__

`Angular`没有使用`JavaScript`原生的`eval()`方法去对一个表达式求值。而是使用`$parse`服务处理表达式。

由于`Angular`内部做了限制，所以`Angular`表达式也无法访问全局变量，如`window`,`document`或是`location`。防止意外发生。取而代之的，要访问前面这些变量，使用`$window`和`$location`，`$document`服务。

```html
<div class="example2" ng-controller="ExampleController">
  Name: <input ng-model="name" type="text"/>
  <button ng-click="greet()">Greet</button>
  <button ng-click="window.alert('Should not see me')">Won't greet</button>
</div>
```
```js
angular
  .module('expressionExample', [])
  .controller('ExampleController', ['$window', '$scope', function($window, $scope) {
    $scope.name = 'World';

    $scope.greet = function() {
      $window.alert('Hello ' + $scope.name);
    };
}]);
```
结果，只有使用`$window`的，才会弹出`alert`。

* __不能使用条件语句__

但是三目运算符可以使用`(a ? b : c)`，不能使用条件语句是因为`Angular`框架的理念和设计哲学，做了这个限制，你应该将应用逻辑放在控制器`controller`中，而不是视图`view`中。如果你要在表达式中使用条件语句，循环，或者抛出一个异常，请将这些语句放在一个函数中，然后调用它。

* __不能使用函数和正则表达式__

为了避免在视图中进行复杂的数据模型转换逻辑。这些逻辑应该放在控制器`controller`中或是过滤器`filter`中，这样也方便测试。

* __容错__

在`JavaScript`中，执行这样的表达式`a.b.c`，这时，如果`a`不是一个对象，那么会抛出一个异常。
而在`Angular`中，在有值则在视图中显示，无值则不显示，并不需要抛出异常，所以对于之前的情况：

``{{a.b.c}}``
在`Angular`中不会抛出异常，表达式求值结果是`undefined`或者`null`，视图不显示而已。
