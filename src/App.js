import React from 'react';
import { Default } from 'components/layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from 'routes/route';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100%', display: 'flex' }}>
        <Default items={routes} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/vm" />} />
          {routes.items.map(route =>
            route.items.map((item, i) => (
              <Route
                key={i}
                path={item.path}
                name={item.name}
                exact={item.exact}
                component={item.component}
              />
            ))
          )}
          <Route render={() => <Redirect to="/vm" />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
export default App;
