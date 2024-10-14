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
$a = 012; // 八進位 ()
?>