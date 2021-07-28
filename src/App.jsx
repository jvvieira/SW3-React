import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {routes} from './modules/Router'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes(process.env.REACT_APP_CLIENTID).map(route => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App