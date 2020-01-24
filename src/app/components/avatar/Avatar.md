```jsx
<div className="columns">
  <div className="column col-6 col-xs-12">
    <Avatar className="mr-2" size="xl">
      <img src="https://randomuser.me/api/portraits/women/44.jpg"/>
    </Avatar>
    <Avatar className="mr-2" size="lg">
      <img src="https://randomuser.me/api/portraits/women/8.jpg"/>
    </Avatar>
    <Avatar className="mr-2">
      <img src="https://randomuser.me/api/portraits/men/1.jpg"/>
    </Avatar>
    <Avatar className="mr-2" size="sm">
      <img src="https://randomuser.me/api/portraits/women/9.jpg"/>
    </Avatar>
    <Avatar className="mr-2" size="xs">
      <img src="https://faces.design/faces/m/m15.png"/>
    </Avatar>
  </div>

  <div className="column col-6 col-xs-12">
    <Avatar className="mr-2" size="xl" initial="KC">
    </Avatar>
    <Avatar className="mr-2" size="lg" initial="KC">
    </Avatar>
    <Avatar className="mr-2" initial="KC">
    </Avatar>
    <Avatar className="mr-2" size="sm" initial="KC">
    </Avatar>
    <Avatar className="mr-2" size="xs" initial="KC">
    </Avatar>
  </div>
</div>
```
Add the `avatar` class to `<img>` element. There are 4 additional sizes available, including `avatar-xl`(64px), `avatar-lg`(48px), `avatar-sm`(24px), and `avatar-xs`(16px). By default, the avatar size is 32px.

For users who don't have profile pictures, you may use their initials for avatars. Add the `avatar` class and avatar size class to <div> element. The `data-initial` attribute is the name appear inside the avatar.

### Avatar icons
```jsx
<div className="column col-12">
  <Avatar className="mr-2" size="xl">
    <img src="https://randomuser.me/api/portraits/women/44.jpg"/>
    <img className="avatar-icon" src="https://randomuser.me/api/portraits/women/8.jpg"/>
  </Avatar>
  <Avatar className="mr-2" size="lg">
    <img src="https://randomuser.me/api/portraits/women/8.jpg"/>
    <img className="avatar-icon" src="https://randomuser.me/api/portraits/men/1.jpg"/>
  </Avatar>
  <Avatar className="mr-2">
    <img src="https://randomuser.me/api/portraits/men/1.jpg"/>
    <img className="avatar-icon" src="https://randomuser.me/api/portraits/women/9.jpg"/>
  </Avatar>
  <Avatar className="mr-2" size="sm">
    <img src="https://randomuser.me/api/portraits/women/9.jpg"/>
    <img className="avatar-icon" src="https://faces.design/faces/m/m15.png"/>
  </Avatar>
  <Avatar className="mr-2" size="xs">
    <img src="https://faces.design/faces/m/m15.png"/>
    <img className="avatar-icon" src="https://randomuser.me/api/portraits/women/44.jpg"/>
  </Avatar>
</div>
```

### Avatar presence
```jsx
<div className="column col-12">
  <Avatar className="mr-2" size="xl">
    <img src="https://randomuser.me/api/portraits/women/44.jpg"/>
    <i className="avatar-presence online"></i>
  </Avatar>
  <Avatar className="mr-2" size="lg">
    <img src="https://randomuser.me/api/portraits/women/8.jpg"/>
    <i className="avatar-presence busy"></i>
  </Avatar>
  <Avatar className="mr-2">
    <img src="https://randomuser.me/api/portraits/men/1.jpg"/>
    <i className="avatar-presence away"></i>
  </Avatar>
  <Avatar className="mr-2" size="sm">
    <img src="https://randomuser.me/api/portraits/women/9.jpg"/>
    <i className="avatar-presence gray"></i>
  </Avatar>
  <Avatar className="mr-2" size="xs">
    <img src="https://faces.design/faces/m/m15.png"/>
    <i className="avatar-presence online"></i>
  </Avatar>
</div>
```
Avatars support presence indicators. You can add an `<i>` element with the `avatar-presence` class, and add `online`, `busy` or `away` class for different status colors. The default is `gray` which means offline.

See other [avatar options](https://picturepan2.github.io/spectre/components/avatars.html)
