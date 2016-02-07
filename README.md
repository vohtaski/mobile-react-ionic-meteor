# mobile app on meteor+ionic+react
mobile playground

# Installation

## install meteor
```bash
curl https://install.meteor.com/ | sh
```

## add extra meteor modules
```bash
meteor add cosmos:browserify fourseven:scss@2.0.0 meteorhacks:npm meteoric:ionic-sass meteoric:ionicons-sass react reactrouter:react-router

# for fake user accounts
meteor add digilord:faker

# for real user accounts
meteor add accounts-password
```

## sign up user into phone
in browser console do
```js
Meteor.loginWithPassword("evgeny", "password")
```

# Running

```bash
meteor
```
