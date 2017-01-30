# Sauce: A Pomodoro Timer

## Technology Stack
- [Angular (v2.3.1)](https://angular.io/) - JavaScript web application framework

## Development Tooling

- [Angular CLI](https://github.com/angular/angular-cli) - CLI tool for scaffolding, running, and building application
- [TypeScript](https://github.com/Microsoft/TypeScript) - Typed superset of JavaScript that compiles to plain JavaScript
- [Karma](https://github.com/karma-runner/karma) - Test Runner for JavaScript based applications
- [Jasmine](https://github.com/jasmine/jasmine) - Behavior Driven Development (BDD) testing framework for JavaScript
- [Sass](http://sass-lang.com/) - CSS preprocessor that extends the language with programmatic features
- [Autoprefixer](https://github.com/postcss/autoprefixer) - [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).

## Application Structure
__*Data Source > Service > Component*__

**Components** are the layer the user interacts with, composed of a JavaScript class (TypeScript) and a component template (HTML).

- **App** (top-level component)
- **Views** (mid-level components, i.e. pages with defined routes)
  - Timer
  - About
- **Components** (low-level components)
  - Tabs
  - Timer
    - Countdown
    - Range
  - Action Buttons
  - Sidebar
    - History
      - Table
        - Rows
    - Settings
      - Custom Timers
        - Timer Option
      - Custom Alarms

**Service** features all of the communication business logic of the application, i.e. data modification, API calls, and UI state management.

- Data Services
  - Local Storage
- UI State Services
  - Timer
  - History
  - Settings

## State Management

## Development & Build Process

### Prerequisites
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
```
$ brew install watchman
$ npm install -g angular-cli typescript
```

### Installation
```
$ npm install
```

### Development
```
$ npm run serve
```
_Runs `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files._

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build
```
$ npm run build
```
_Runs `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build._

### Testing
```
$ npm run test
```
_Runs `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io)._


## Deployment
```
$ npm run deploy
```
_Runs `ng github-pages:deploy` to deploy to Github Pages._
