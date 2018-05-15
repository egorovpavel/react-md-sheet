# react-md-sheet

status : *Proof of concept*

This components is attempt to replicate GTM(https://www.google.com/analytics/tag-manager/) sliding sheets behavior. This behavior useful for displaying deeply nested configurations. 

![Demo](https://raw.githubusercontent.com/egorovpavel/react-md-sheet/master/demo.gif)


### Dependencies

- `material-ui`
- `react-router`
- `redux`

### Usage

#### Combine reducers 

```
import { combineReducers, createStore } from 'redux'
import {reducersSheet} from 'react-md-sheet'

const combined = combineReducers({
  reducersSheet
})
```

#### Use `Builder` to compose sheets

```
const NewUserSheet = (new Builder).header(SimpleHeader).body(NewUserView).build()
```

#### Use `Route` instead of provided by `react-router` 

```
import { Builder, Route, SimpleHeader } from 'react-md-sheet'

<Route path={`/users/*`} component={NewUserSheet} title='New User' size={40}/>
```