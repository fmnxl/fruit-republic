# Fruit Republic

Fruits is all you need.

This is a demo shopping cart app written in React.

# Scripts

- `npm start` runs the app in dev mode
- `npm run build` builds and minifies the app
- `npm run test` runs tests using jest

# Approach

- Test driven development
- As far as possible keeping functions functional and components stateless for better unit testing
- Separate e2e and unit tests. At the moment they are all run at the same time, but in the future as the app expands the e2e tests will take longer and longer and thus should be run less often (instead on each save)

# Application Structure

Here are the main bits of the app:

`src/App.js` : This is the container where the application state sits. Handles all interactions
within the page.

`src/App.test.js` : At the moment includes testing the App component, as well as handling of user actions (e2e tests) such as modifying item quantity and removing items. Could be separated in the future to prevent slow e2e test to always be run.

`src/calculator.js` : The business logic sits here. Calculates the total price of items after applying discounts

`src/commponents/*` : Stateless components that builds up the app

# Technologies

- React (duh)
- Poi: Build and dev environment tooling for front-end projects
- Tachyons: Very cool CSS Framework
- Jest: Test utilities (runner, assertion library, function mocks, etc)
- Enzyme: React test helper
- Ramda: Functional programming helper
- ESLint: Enforce code style and catches silly bugs

# FAQ

## Why are the Jest func coverage not all 100%?

Because Jest includes empty anonymous functions (i.e. `() => {}`) in `defaultProps`.
