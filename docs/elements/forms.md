# Forms

Forms provide the most common control styles used in forms, including input, textarea, select, checkbox, radio and switch.


## Example form

<form class="form">
  <div class="form-group is-inline">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" placeholder="Name">
  </div>
  <div class="form-group is-inline">
    <label class="form-label">Skills</label>
    <div class="form-field">
      <input class="form-control" type="text" placeholder="Skills">
      <div class="form-suffix">
        <i class="fas fa-filter"></i>
      </div>
    </div>
  </div>
  <div class="form-group is-inline">
    <label class="form-label">Username</label>
    <div class="form-field">
      <div class="form-path">example.com/</div>
      <input class="form-control" type="text" placeholder="Username">
    </div>
  </div>
  <div class="form-group is-inline">
    <label class="form-label">Gender</label>
    <div class="form-field">
      <label class="radio-field">
        <input type="radio" name="gender" value="male">
        <span class="radio"></span>
        <span>Male</span>
      </label>
      <label class="radio-field">
        <input type="radio" name="gender" value="female">
        <span class="radio"></span>
        <span>Female</span>
      </label>
    </div>
  </div>
  <div class="form-group is-inline">
    <label class="form-label"></label>
    <label class="checkbox-field">
      <input type="checkbox">
      <span class="checkbox"></span>
      <span>Remember me</span>
    </label>
  </div>
  <div class="form-group is-inline">
    <label class="form-label"></label>
    <div class="form-actions">
      <button class="btn is-primary" type="submit">Send</button>
      <button class="btn is-cancel" type="reset">Cancel</button>
    </div>
  </div>
</form>

```html
<form class="form">

  <div class="form-group is-inline">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" placeholder="Name">
  </div>

  <div class="form-group is-inline">
    <label class="form-label">Skills</label>

    <div class="form-field">
      <input class="form-control" type="text" placeholder="Skills">

      <div class="form-suffix">
        <i class="fas fa-filter"></i>
      </div>
    </div>
  </div>

  <div class="form-group is-inline">
    <label class="form-label">Username</label>

    <div class="form-field">
      <div class="form-path">example.com/</div>

      <input class="form-control" type="text" placeholder="Username">
    </div>
  </div>

  <div class="form-group is-inline">
    <label class="form-label">Gender</label>

    <div class="form-field">

      <label class="radio-field">
        <input type="radio" name="gender" value="male">
        <span class="radio"></span>

        <span>Male</span>
      </label>

      <label class="radio-field">
        <input type="radio" name="gender" value="female">
        <span class="radio"></span>

        <span>Female</span>
      </label>

    </div>
  </div>

  <div class="form-group is-inline">
    <label class="form-label"></label>

    <label class="checkbox-field">
      <input type="checkbox">
      <span class="checkbox"></span>

      <span>Remember me</span>
    </label>
  </div>

  <div class="form-group is-inline">
    <label class="form-label"></label>

    <div class="form-actions">
      <button class="btn is-primary" type="submit">Send</button>
      <button class="btn is-cancel" type="reset">Cancel</button>
    </div>

  </div>
</form>
```

## How to use

In order to add styles, add class `form-control` to `input` or `textarea`

<input class="form-control" placeholder="Enter something">

<br>
<br>

<textarea class="form-control" rows="4" placeholder="Enter long text"></textarea>

```html
<input class="form-control">

<textarea class="form-control" rows="4"></textarea>
```


## Form-group

if you have multiple input fields, and they follow one another. Or you need make an inline fields, when the label is on the left, and the input field on the right, you need wrap your input with `.form-group`.

<div class="form-group">
  <label class="form-label">Username</label>
  <input type="text" class="form-control" placeholder="Username">
</div>

or

<div class="form-group is-inline">
  <label class="form-label">Username:</label>
  <input type="text" class="form-control" placeholder="Username">
</div>

```html
<div class="form-group">
  <label class="form-label">Username</label>

  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="form-group is-inline">
  <label class="form-label">Username:</label>

  <input type="text" class="form-control" placeholder="Username">
</div>
```


## Label

To provide a label for input, add a label with the class `.form-label`

<label class="form-label">Name</label>
<input class="form-control" placeholder="Name">

```html
<label class="form-label">Name</label>

<input class="form-control" placeholder="Name">
```


## States

There are 4 input states: success, warning, danger and disabled

<input class="form-control is-success" placeholder="Your data is corret"><br><br>
<input class="form-control is-warning" placeholder="Your password is too weak"><br><br>
<input class="form-control is-danger" placeholder="You can not use this email"><br><br>
<input class="form-control" disabled placeholder="/john_doe">

```html
<input class="form-control is-success" placeholder="Your data is corret"><br><br>
<input class="form-control is-warning" placeholder="Your password is too weak"><br><br>
<input class="form-control is-danger" placeholder="You can not use this email"><br><br>
<input class="form-control" disabled placeholder="/john_doe">
```


## Sizes

Also you can set the input size

<input class="form-control" placeholder="Default"><br><br>
<input class="form-control is-medium" placeholder="Medium"><br><br>
<input class="form-control is-large" placeholder="Large">

```html
<input class="form-control" placeholder="Default"><br><br>
<input class="form-control is-medium" placeholder="Medium"><br><br>
<input class="form-control is-large" placeholder="Large">
```


## Prefix / suffix

A prefix or suffix is used to provide icons on an input or any additional information

<div class="form-group">
  <div class="form-prefix">
    <i class="fas fa-filter"></i>
  </div>
  <input class="form-control" placeholder="Search something...">
  <div class="form-suffix">
    <i class="fas fa-search"></i>
  </div>
</div>

```html
<div class="form-group">

  <div class="form-prefix">
    <i class="fas fa-filter"></i>
  </div>

  <input class="form-control" placeholder="Search something...">

  <div class="form-suffix">
    <i class="fas fa-search"></i>
  </div>

</div>
```


## Path

If you need to add any text before the input, wrap it in a .form-field and add .form-path

<div class="form-group">
  <label class="form-label">Domain</label>
  <div class="form-field">
    <div class="form-path">http://</div>
    <input class="form-control" placeholder="Site domain">
  </div>
</div>

```html
<div class="form-group">
  <label class="form-label">Domain</label>

  <div class="form-field">
    <div class="form-path">http://</div>

    <input class="form-control" placeholder="Site domain">
  </div>
</div>
```


## Form actions

`.form-actions` is used to make submit/reset buttons more stylish

<div class="form-actions">
  <button class="btn is-primary">Upload</button>
  <button class="btn is-cancel">Cancel</button>
</div>

```html
<div class="form-actions">
  <button class="btn is-primary">Upload</button>
  <button class="btn is-cancel">Cancel</button>
</div>
```


## Radio-button

Radio-buttons are used to give the possibility of choosing only one option from many

<label class="radio-field">
  <input type="radio" name="gender" value="male">
  <span class="radio"></span>
  <span>Male</span>
</label>

<label class="radio-field">
  <input type="radio" name="gender" value="female">
  <span class="radio"></span>
  <span>Female</span>
</label>

```html
<label class="radio-field">
  <input type="radio" name="gender" value="male">
  <span class="radio"></span>

  <span>Male</span>
</label>
```

## Checkbox

Checkboxes allow you to select something

<label class="checkbox-field">
  <input type="checkbox">
  <span class="checkbox"></span>
  <span>Remember me</span>
</label>

```html
<label class="checkbox-field">
  <input type="checkbox">
  <span class="checkbox"></span>

  <span>Remember me</span>
</label>
```


## Switch

Switches like checkboxes, but has different styles

<label class="switch">
  <input type="checkbox">
  <span class="switch-box"></span>
  <span>Some text</span>
</label>

```html
<label class="switch">
  <input type="checkbox">
  <span class="switch-box"></span>

  <span>Some text</span>
</label>
```
