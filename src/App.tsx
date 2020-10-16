import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
// import { ReactQueryDevtools } from "react-query-devtools";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { ErrorFallback } from "./ErrorFallback";

export const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Router>
      <nav
        css={`
          width: 100%;
          height: 2rem;
        `}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Layout>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
    {/* <ReactQueryDevtools initialIsOpen /> */}
  </ErrorBoundary>
);
