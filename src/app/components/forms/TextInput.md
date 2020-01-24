`TextInput` is a wrapper of an html `input` with included label, validation states and messages and also icons.

```jsx
<div className="column col-6">
  <TextInput
    label="Name"
    placeholder="Name">
  </TextInput>
  <TextInput
    type="emai"
    label="Email"
    placeholder="your@email.com">
  </TextInput>
</div>
```

### Form sizes

```jsx
<div className="column col-6">
  <TextInput
    label="Name"
    placeholder="Name"
    size="sm">
  </TextInput>
  <TextInput
    label="Name"
    placeholder="Name"
    size="lg">
  </TextInput>
</div>
```

### Form icons

Specify an `iconPosition` and `iconClass` props to add an icon next to the form input.

```jsx
<div className="column col-6">
  <TextInput
    placeholder="Name"
    iconPosition="right"
    iconClass="check">
  </TextInput>
</div>
```

### Form validation styles

To use form validation styles, you can set the `success` or `error` props to the controls and optionally specify a `validationMsg` to provide form validation success and error messages.

```jsx
<div className="column col-6">
  <TextInput
    label="Name"
    placeholder="Name"
    validationMsg="The name is valid"
    success>
  </TextInput>
  <TextInput
    type="password"
    label="Password"
    placeholder="Password"
    validationMsg="Passwords must have at least 8 characters"
    error>
  </TextInput>
</div>
```

[View more examples](https://picturepan2.github.io/spectre/elements/forms.html#forms-input)