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

### Components
- **[App](src/app/views/app-view)** (top-level component)
- **[Views](src/app/views)** (mid-level components, i.e. pages with defined routes)
  - [Timer](src/app/views/timer-view)
  - [About](src/app/views/about-view)
- **[Components](src/app/views/components)** (low-level components, i.e. interface components)
  - [Timer Toggle](src/app/components/timer-toggle)
  - [Timer](src/app/components/timer)
  - [Action Buttons](src/app/components/action-buttons)
  - [Sidebar](src/app/components/sidebar)
    - [History](src/app/components/history)
    - [Settings](src/app/components/settings)

### Services
- [Local Storage](src/app/components/storage)
- [Timer](src/app/components/timer)
- [History](src/app/components/history)
- [Settings](src/app/components/settings)

### Models
- [History](src/app/models/history.ts)
- [Settings](src/app/models/settings.ts)
- [Timer](src/app/models/timer.ts)

### Pipes (Filters)
- [Camelize](src/app/pipes/camelize)
- [Capitalize](src/app/pipes/capitalize)
- [Convert Dashes to Spaces](src/app/pipes/dash-to-space)

## Development & Build Process

### Prerequisites
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
```
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
_Runs `ng serve` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files._

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
