# Basic Synatax(基本語法)
Create sophisticated[^1] formatting[^2] for your prose[^3] and code on Github with simple syntax.
## Headings(標題)
To create a heading, add one to six `#` symbols[^4] before your heading text. The number of `#` you use will determine[^5] the hierarchy[^6] level and typeface[^7] size of the heading.

![title](/Markdown/MDimg/Heading%20level.png)

``` HTML
# H1 -> <h1>Heading level 1</h1>
## H2 -> <h2>Heading level 1</h2>
### H3 -> <h3>Heading level 1</h3>
#### H4 -> <h4>Heading level 1</h4>
##### H5 -> <h5>Heading level 1</h5>
###### H6 -> <h6>Heading level 1</h6>
```
## Bold Text(粗體文字)

``` HTML
I just love **bold text** -> I just love <strong>bold text</strong>.
```
I just love **bold text**

## Italic Text(斜體文字)

``` HTML
I just love *Italic Text* -> I just love <em>Italic Text</em>
```
I just love *Italic Text*

## Bold and Italic Text(粗體+斜體文字)

``` HTML
This text is ***really important*** -> I just love <strong><em>Italic Text</em></strong>
```
This text is ***really important***.

## Blockquotes(區塊引用)

```
> Successful use of Blockquotes
```
> Successful use of Blockquotes

## Ordered Lists(有序列表)

``` HTML
1. First item
2. Second item
3. Third item
4. Fourth item
- - - - - - - - - 
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ol>
```
1. First item
2. Second item
3. Third item
4. Fourth item

## Unordered Lists(無序列表)

``` HTML
- First item
- Second item
- Third item
- Fourth item
- - - - - - - - - 
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ul>
```
- First item
- Second item
- Third item
- Fourth item

## Fenced Code Blocks (圍欄代碼區塊)

you’ll use three backticks (```)[^8] on the lines before and after the code block.
```HTML
( ``` )
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
( ``` )
```
##  Horizontal rules(水平線){#id}

To create a horizontal rule, use three or more asterisks (***)[^9], dashes (---)[^10] on a line by themselves.

```
***,---
```
*** 
---

## Links(連結)

```HTML
Welcome to my [Github](https://github.com/wangezi)
Welcome to my <a href="https://github.com/wangezi">Github</a>
```
Welcome to my [Github](https://github.com/wangezi).

## Linking to Heading IDs(連結到標題ID)
```HTML
[Basic Synatax](#basic-synatax)
<a href="#basic-synatax">Basic Synatax</a>
```


[^1]:複雜的。
[^2]:格式化。
[^3]:散文。
[^4]:符號。
[^5]:決定。
[^6]:等級制度，階級。
[^7]:字體。
[^8]:反引號。
[^9]:星號。
[^10]:破折號。