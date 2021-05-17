# react-children-reveal

> `npm i react-children-reveal`

Simple react library to progressively reveal children components. 

## Basic usage

By wrapping child components inside a RCR (react-children-reveal) wrapper you'll ensure that 

```javascript
import RCR from 'react-children-reveal'

const TodoList = props => (
  <div>
    <h1>My todos</h1>
    <ul>
      <RCR>
        <li>Buy groceries</li>
        <li>Clean the kitchen</li>
        <li>Feed the cat</li>
        <li>Get some rest</li>
      </RCR>
    </ul>
  </div>
)
```

## Props 

| name       | description                                                                                                             | default value    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------- |
| delay      | Time (ms) required until next child is revealed                                                                         | `0`              |
| onEnd      | Callback function that is executed when all children are revealed                                                       | `() => null`     |
| onRevealed | Callback function that is executed everytime a child is revealed. The offset of the revealed child is given as argument | `offset => null` |
| time       | Reveal animation duration (ms)                                                                                          | `1000`           |
| type       | Animation type (either `fadein` / `zoomin` / `hslidein` or `vslidein`)                                                  | `fadein`         |


## Examples

### Display progression

```javascript 
import RCR from 'react-children-reveal'

const ColorfulSquares = props => {
  const ITEM_LEN = 15
  const [progression, setProgression] = useState(0)
  const items = []

  for(let i=0;i<ITEM_LEN;i++){
    items.push(Math.random() * 360 | 0)
  }

  return (
  <div>
    <h1>{progression} out of {ITEM_LEN} displayed</h1>
    <RCR onRevealed={offset => setProgression(offset)}}>
    {
      items.map((item, iItem) => (
        <div key={iItem} style={{
          margin: 5,
          width: 20,
          height: 20,
          display: 'inline-block',
          backgroundColor: `hsl(${item}, 65%, 65%)`,
        }} />
      ))
    }
    </RCR>
  </div>
  )
}
```

### Display another div once every child is displayed

```javascript 
import RCR from 'react-children-reveal'

const TodoList = props => {
  const [allRevealed, setAllRevealed] = useState(false)
  const items = 'react-children-reveal'.split('')

  return (
  <div>
    {
      allRevealed && <h1>All set and done!</h1>
    }

    <RCR type="zoomin" time={1300} onEnd={() => setAllRevealed(true)}}>
    {
      items.map((item, iItem) => (
        <span key={iItem}>{item}</span>
      ))
    }
    </RCR>
  </div>
  )
}
```

## Contributing

Any bugfix is welcome however there is no plan to add new features to this package in the future. Feel free to fork, copy and modify this package as you please.