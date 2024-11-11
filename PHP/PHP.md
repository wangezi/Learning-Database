# 基礎 PHP - 前言

PHP 不像一般 HTML 網頁，只要單機下開啟檔案就可以檢視網頁， PHP 必須先在伺服器端執行完後，在將結果傳至使用者端瀏覽器中檢視結果，所以必須使用網站伺服器，且伺服器要支援 PHP

## PHP 資料型態

### Bollean (布林值)

簡單的資料型態，可以為 ture & false 不區分大小寫。

```php
<?php
$foo = ture; //設置 foo 變數為 ture
?>
```

常用在判斷式

```php
<?php
// 兩個等於(=)代表操作符，檢測是否相等，返回 Bollean
if ($password == '123'){
    echo 'pass';
}

// 這樣寫是不必要的
if ($check == ture){
    echo 'check in';
}

// 可以使用以下方法
if ($check){
    echo 'check in';
}
?>
```
- - -
### Integer(整數型態)

整型值 int 可以使用二進制、八進制、十進制或十六進制表示，前面可以加上可選的符號( - 或者 + )。 可以用負運算式來表示一個負的 int 。

```php
<?php
$a = 10; // 十進位
$a = 012; // 八進位 (等於十進位)
$a = 0xa; // 十六進制數字(等於十進制 10)
$a = 0b1010; //二進制數字 (等于十進制 10)
$a = 1_0_1_0; // 整型數值 (PHP 7.4.0 以後)輸出1010
?>
```
整數溢出，如果超過int範圍會轉換成float型態。

```php
<?php
// var_dump()是判斷變量的類型與長度，並輸出變量的數值。
$large_number = 2147483647;
var_dump($large_number); // int(2147483647)

$large_number = 2147483648;
var_dump($large_number); // float(2147483648)
?>
```
- - -

### Float(小數點)
擁有小數點的正負數值。

```php
<?php
$num = 99.99;
$num = -88.88;
?>
```
- - -
### String (字串)
由字符組成，每個字符等同於一個字節。  
定義一個 String 最簡單就是用 ' '(單引號)包起來。

```php
<?php
$text = 'This is a test String';
echo $text; // 輸出: This is a String
?>
```
如果包含在 " "(雙引號)就可以對特殊字符進行解析。

```php
<?php
//可以直接將變數帶入
$dog = "Baekhyun";
echo "My wife's favorite idol is $dog "
?>
```
- - -
### Array(陣列)
PHP 中的 Array 實際上是一個有序映射。  
映射是一種把 values 關連到 keys 的類型。
可以用 array() 方法來結構一個 Array。 接受任意數量並用逗號分隔的 key => values。

```php
<?php
$fruit = array( 0 => "apple", 1 => "tomato", 2 => "banana");
echo $fruit[0]; // apple

// 可以使用以下短語法
$fruit = [ 0 => "apple", 1 => "tomato", 2 => "banana"];
echo $fruit[0]; // apple
?>
```
沒有 keys 的 Array

```php
<?php
$fruit = array("apple", "tomato", "banana");
var_dump($fruit);

//輸出結果
/*array(3) {
    [0] =>
    string(5) "apple"
    [1] =>
    string(6) "tomato"
    [2] =>
    string(6) "banana"
}*/
?>
```
Array 可以用在許多地方，以下範例

```php
<?php
$map = array( "version" => 4, "OS" => "Linux", "lang" => "english", "short_tags" => true);

// . . . 完全等同於 :
$a = array();
$a["version"] = 4
$a["os"] = "Linux";
$a["lang"] = "english";
$a["short_tags"] = true;

unset($a["os"]); // 刪除 "Linux"
?>
```

輸出集合

```php
<?php
$maps = array( "version" => 4,
              "OS" => "Linux",
              "lang" => "english",
              "short_tags" => true
        );

foreach ($maps as $key => $value) {
    echo "$key is $value\n";
}
// version is 4
// OS is Linux
// lang is english
// short_tags is 1
?>
```
Array 是有序的。  
也可以使用不同的排序函数来改變順序。

Array 排序範例

```php
<?php
sort($files); // 對 value 排序
print_r($files);
?>
```
- - -