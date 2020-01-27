`Input` is a wrapper of an html `input` with included label, validation states and messages and also icons.

```jsx
<div className="column col-6">
  <Input
    label="Name"
    placeholder="Name">
  </Input>
  <Input
    type="emai"
    label="Email"
    placeholder="your@email.com">
  </Input>
</div>
```

### Form sizes

```jsx
<div className="column col-6">
  <Input
    label="Name"
    placeholder="Name"
    size="sm">
  </Input>
  <Input
    label="Name"
    placeholder="Name"
    size="lg">
  </Input>
</div>
```

### Form icons

Specify an `iconPosition` and `iconClass` props to add an icon next to the form input.

```jsx
<div className="column col-6">
  <Input
    placeholder="Name"
    iconPosition="right"
    iconClass="check">
  </Input>
</div>
```

### Form validation styles

To use form validation styles, you can set the `success` or `error` props to the controls and optionally specify a `validationMsg` to provide form validation success and error messages.

```jsx
<div className="column col-6">
  <Input
    label="Name"
    placeholder="Name"
    validationMsg="The name is valid"
    success>
  </Input>
  <Input
    type="password"
    label="Password"
    placeholder="Password"
    validationMsg="Passwords must have at least 8 characters"
    error>
  </Input>
</div>
```

### Input groups

To attach text and button along with an input, add the `groupAddon` or `groupButton` prop with the element.

```jsx
import {Button} from "../button/Button";
import {Select} from "./Select";
<div className="columns">
  <div className="column col-6 my-2">
    <Input
      size="sm"
      placeholder="username"
      after={
        <Select size="sm">
          <option>Slack</option>
          <option>Skype</option>
          <option>Zoom</option>
        </Select>
      }>
    </Input>
  </div>
  <div className="column col-6 my-2">
    <Input
      size="sm"
      placeholder="Name"
      before={<span>slack.com/</span>}
      groupButton={<Button className="btn-primary">Submit</Button>}>
    </Input>
  </div>

  <div className="column col-6 my-2">
    <Input
      placeholder="username"
      after={
        <Select>
          <option>Slack</option>
          <option>Skype</option>
          <option>Zoom</option>
        </Select>
      }>
    </Input>
  </div>
  <div className="column col-6 my-2">
    <Input
      placeholder="Name"
      before={<span>slack.com/</span>}
      groupButton={<Button className="btn-primary">Submit</Button>}>
    </Input>
  </div>

  <div className="column col-6 my-2">
    <Input
      size="lg"
      placeholder="username"
      after={
        <Select size="lg">
          <option>Slack</option>
          <option>Skype</option>
          <option>Zoom</option>
        </Select>
      }>
    </Input>
  </div>
  <div className="column col-6 my-2">
    <Input
      size="lg"
      placeholder="Name"
      before={<span>slack.com/</span>}
      groupButton={<Button className="btn-primary">Submit</Button>}>
    </Input>
  </div>
</div>
```

[View more examples](https://picturepan2.github.io/spectre/elements/forms.html#forms-input)