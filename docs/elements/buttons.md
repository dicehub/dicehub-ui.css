# Buttons


## How to use

Add class `btn` to a `button`, `a`

<div class="v-buttons">
<button class="btn">Button</button>
<a href="#" class="btn">Link</a>
</div>

```html
<button class="btn">Button</button>
<a href="#" class="btn">Link</a>
```


## Styles

There are a few of classes for styling buttons

<div class="v-buttons">
<button class="btn is-primary">Primary button</button>
<button class="btn is-secondary">Secondary button</button>
<button class="btn is-success">Success button</button>
<button class="btn is-info">Info button</button>
<button class="btn is-warning">Warning button</button>
<button class="btn is-danger">Danger button</button>
<button class="btn is-cancel">Cancel button</button>
</div>

```html
<button class="btn is-primary">Primary button</button>
<button class="btn is-secondary">Secondary button</button>
<button class="btn is-success">Success button</button>
<button class="btn is-info">Info button</button>
<button class="btn is-warning">Warning button</button>
<button class="btn is-danger">Danger button</button>
<button class="btn is-cancel">Cancel button</button>
```


## States

For loading button add class `is-loading`, in appearance it does not do anything, but all the magic under the hood

<button class="btn is-primary is-loading">Load more</button>

```html
<button class="btn is-primary is-loading">Load more</button>
```

And add class `is-loading-active` for activate the spinner

<button class="btn is-primary is-loading is-loading-active">Load more</button>

```html
<button class="btn is-primary is-loading is-loading-active">Load more</button>
```


For the disabled button, add the attribute `[disabled]`, (for links add `is-disabled` class)

<button class="btn" disabled>Disabled button</button>
<a href="#" class="btn is-disabled">Disabled button</a>

```html
<button class="btn" disabled>Disabled button</button>
<a href="#" class="btn is-disabled">Disabled button</a>
```


## Sizes

There are only two sizes `.is-medium` and `.is-large`

<button class="btn">Default size</button>
<button class="btn is-medium">Medium size</button>
<button class="btn is-large">Large size</button>

```html
<button class="btn">Default size</button>
<button class="btn is-medium">Medium size</button>
<button class="btn is-large">Large size</button>
```


## Button-group

Wrap the buttons in the `.btn-group`

<div class="btn-group">
  <button class="btn is-primary">Button</button>
  <button class="btn is-primary">Button</button>
  <button class="btn is-primary">Button</button>
</div>

```html
<div class="btn-group">
  <button class="btn is-primary">Button</button>
  <button class="btn is-primary">Button</button>
  <button class="btn is-primary">Button</button>
</div>
```
