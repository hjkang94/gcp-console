import React from 'react';
import { Default } from 'components/layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from 'routes/route';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';

const Container = styled.div`
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Default items={routes} />
        <Switch>
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
          <Route render={() => <Redirect to="/compute/instance" />} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}
export default App;
