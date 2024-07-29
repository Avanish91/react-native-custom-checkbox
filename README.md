# custom-react-native-checkbox


## Install

Install the package via npm:

```javascript
    npm i custom-react-native-checkbox --save
```
## Usage

Import the component:

```javascript
    import Checkbox from 'custom-react-native-checkbox';
```

```jsx
<Checkbox
    checked={true}
    backgroundColor  = '#FFF'
    borderRadius     = 2
    borderWidth      = 1
    checked          = true
    color            = '#000'
    margin           = 5
    name             = 'checkbox1'
    size             = 20
    borderColor      = '#000'
    iconType         = 'check'
    iconSize         = 15
    iconColor        = '#000'
    onChange={(name, checked) => _myFunction(name, checked)}/>
```

### Properties

#### checked

Boolean to indicate whether the checkbox start checked or not. Default is false.

```jsx
<Checkbox
    checked={true}/>
```

#### name

Optional string used to identify the checkbox when there are many of them in the
same component. Default is empty string.

```jsx
<Checkbox
    name='checkbox1'
    checked={true}
    size={30}/>
```

```jsx
<Checkbox
    name='checkbox2'
    checked={true}
    size={30}/>
```

#### size

The width and height of the checkbox. Default is 20.

```jsx
<Checkbox
    checked={true}
    size={30}/>
```

#### style

Optional object to customize the color, backgroundColor, borderRadius,
borderWidth and margin.

```jsx
<Checkbox
    checked={true}
    backgroundColor  = '#FFF'
    borderRadius     = 2
    borderWidth      = 1
    checked          = true
    color            = '#000'
    margin           = 5
    name             = 'checkbox1'
    size             = 20
    borderColor      = '#000'
    iconType         = 'check'
    iconSize         = 15
    iconColor        = '#000'
    onChange={(name, checked) => _myFunction(name, checked)}/>
```

Defaults:
```javascript
    {
        backgroundColor  = '#FFF'
        borderRadius     = 2
        borderWidth      = 1
        checked          = true
        color            = '#000'
        margin           = 5
        name             = 'checkbox1'
        size             = 20
        borderColor      = '#000'
        iconType         = 'check'
        iconSize         = 15
        iconColor        = '#000'
    }
```

#### onChange
Function to be called when toggling the checkbox. Receives the checkbox name and
the checked state as parameters. Default is null.

```jsx
<Checkbox
    checked={true}
    onChange={(name, checked) => _myFunction(name, checked)}/>
```