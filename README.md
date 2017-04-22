
# Colours 
> *Like colors, but Canadian*

:art: A React component to visualize and easily access a colour palette

![colour palette](http://i.imgur.com/jL8ZeWG.png)

## Install

```
npm install react-colours
```

## Basic Usage

Import the React component:

```js
import Colours from 'react-colours';

const colours = ['#277bc4', '#68c89e', '#ec89aa', '#a66ace', '#44b1da'];

class MyApp extends React.Component {
  render() {
    return (
      <Colours colours={colours} />
    );
  }
}
```

## Props

### colours

This is a list of colours that you want to display on the screen. This can be in hex, rgb, rgba, hsl, and hsla.
