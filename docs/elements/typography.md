# Typography

Default styles for headings, paragraphs and lists.


## Headings

<div class="ui">
  <div><h1>Heading h1 <Badge text="4 rem" type="tip"/></h1></div>
  <div><h2>Heading h2 <Badge text="3.2 rem" type="tip"/></h2></div>
  <div><h3>Heading h3 <Badge text="2.8 rem" type="tip"/></h3></div>
  <div><h4>Heading h4 <Badge text="2.4 rem" type="tip"/></h4></div>
  <div><h5>Heading h5 <Badge text="2 rem" type="tip"/></h5></div>
  <div><h6>Heading h6 <Badge text="1.6 rem" type="tip"/></h6></div>
</div>

```html
<h1>Heading h1</h1>
```


## Paragraphs

<div class="ui">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, urna eu hendrerit scelerisque, ipsum ligula consequat neque, tincidunt eleifend ante metus aliquet lectus. In ex massa, egestas vel dolor vitae. Vestibulum eu ornare magna, ac malesuada odio. Curabitur eget sem sit amet felis volutpat faucibus. Nullam non odio consectetur nibh elementum vehicula.
  </p>
  <p>
    Vestibulum imperdiet congue ipsum sed sodales. Cras semper aliquam orci ac tincidunt. Vestibulum leo elit, lacinia nec ipsum sit amet, elementum hendrerit tortor. Donec at risus tempus, vulputate est eu, vestibulum tellus. Quisque venenatis malesuada mauris, non interdum urna convallis nec. Maecenas lacus nibh, molestie in sapien eu, fringilla dignissim massa. Sed sollicitudin nibh at nisi pretium maximus.
  </p>
  <p>
    Quisque nibh dolor, pretium blandit commodo quis, dictum sed augue. Aenean eget urna mi. Vestibulum fermentum ante a mi ultricies mollis. Vestibulum mollis malesuada ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut iaculis dolor, id consequat felis. Quisque in dapibus urna. Duis eu sem vitae augue dignissim pellentesque. Donec tempor molestie auctor. Nullam lorem dui, imperdiet a ornare at, eleifend sed augue.
  </p>
</div>

```html
<p>Content</p>
<p>Content</p>
<p>Content</p>
```


## Lists

<div class="ui">
  <ul>
    <li>Lorem ipsum dolor sit.</li>
    <li>Lorem ipsum dolor sit.</li>
    <ul>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
    </ul>
  </ul>

  <ol>
    <li>Lorem ipsum dolor sit.</li>
    <li>Lorem ipsum dolor sit.</li>
  </ol>
</div>

```html
<ul>
  <li>Item</li>
</ul>
```


## Semantic text elements

<div class="ui columns">

  <div class="grid-col-2">
    <abbr title="Internationalization">I18N</abbr>
    <code class="ml-2">abbr</code>
  </div>

  <div class="grid-col-2">
    <strong>Bold</strong>
    <code class="ml-2">strong</code>
    <code class="ml-2">b</code>
  </div>

  <div class="grid-col-2">
    <cite>Citation</cite>
    <code class="ml-2">cite</code>
  </div>

  <div class="grid-col-2">
    <code>Hello World!</code>
    <code class="ml-2">code</code>
  </div>

  <div class="grid-col-2">
    <del>Deleted</del>
    <code class="ml-2">del</code>
  </div>

  <div class="grid-col-2">
    <em>Emphasis</em>
    <code class="ml-2">em</code>
  </div>

  <div class="grid-col-2">
    <i>Italic</i>
    <code class="ml-2">i</code>
  </div>
  
  <div class="grid-col-2">
    <ins>Inserted</ins>
    <code class="ml-2">ins</code>
  </div>

  <div class="grid-col-2">
    <kbd>Ctrl + S</kbd>
    <code class="ml-2">kbd</code>
  </div>

  <div class="grid-col-2">
    <mark>Highlighted</mark>
    <code class="ml-2">mark</code>
  </div>

  <div class="grid-col-2">
    <s>Strikethrough</s>
    <code class="ml-2">s</code>
  </div>

  <div class="grid-col-2">
    <samp>Sample</samp>
    <code class="ml-2">samp</code>
  </div>

  <div class="grid-col-2">
    Text <sub>Subscripted</sub>
    <code class="ml-2">sub</code>
  </div>

  <div class="grid-col-2">
    Text <sup>Superscripted</sup>
    <code class="ml-2">sup</code>
  </div>

  <div class="grid-col-2">
    <time>20:00</time>
    <code class="ml-2">time</code>
  </div>

  <div class="grid-col-2">
    <u>Underline</u>
    <code class="ml-2">u</code>
  </div>

  <div class="grid-col-2">
    <var>x</var> =
    <var>y</var> + 2
    <code class="ml-2">var</code>
  </div>

  <div class="grid-col-2">
    <ruby>漢
      <rt>kan</rt>字
      <rt>ji</rt>
    </ruby>
    <code class="ml-2">ruby</code>
  </div>
</div>


## Fonts

We use the `Nutino` as the main font, but unfortunately this font does not support Cyrillic, that's why `Open Sans` is used as a spare font.

```scss
$font-family: 'Nunito', 'Open Sans', sans-serif;
```


## Blockquote

<div class="ui">
<blockquote>
  <p>Don’t let the noise of others’ opinions drown out your own inner voice.</p>
  <cite>- Steve Jobs</cite>
</blockquote>
</div>

```html
<blockquote>
  <p>Don’t let the noise of others’ opinions drown out your own inner voice.</p>
  <cite>- Steve Jobs</cite>
</blockquote>
```


## Table

Tables include default styles for tables and data sets.

<table class="table table-hover table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Surname</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total:</td>
      <td>2</td>
    </tr>
  </tfoot>
</table>


Add the `table` class to any &lt;table&gt; element. The class will add padding, border and emphasized table header. Use the `table-striped` class to &lt;table&gt; to add zebra striped style. For hoverable table rows, you can add the `table-hover` class to enable hover style.


```html
<table class="table table-hover table-striped">
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total: 1</td>
    </tr>
  </tfoot>
</table>
```
