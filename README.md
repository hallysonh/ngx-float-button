# ngx-float-button

[![version](https://img.shields.io/npm/v/ngx-float-button.svg)](http://npm.im/ngx-float-button)
[![MIT License](https://img.shields.io/github/license/hallysonh/ngx-float-button.svg)](https://opensource.org/licenses/MIT)

[`Google Material Floating Action Button`](https://material.io/guidelines/components/buttons-floating-action-button.html),
Implementation for Angular v7+. 

This project was based on [ngc-float-button](https://github.com/GustavoCostaW/ngc-float-button)

## Demo

Access a demo [here](https://hallysonh.github.io/ngx-float-button/) or download this project and execute: `yarn && yarn start` or `npm install && npm run start` to self server it.

## Installation

First, you need to install the npm module:

```sh
npm install ngx-float-button --save
```

## Dependencies

#### Google Material Icons

#### Angular Material >= 7

#### Angular >= 7

## Usage

#### 1. You need to add the Google Material icons in your `index.html`:

##### The Google Material Icons is required by Angular Material <mat-icon> component

```HTML
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Check the [`Google Material Icons site`](https://material.io/icons/) to see all icons

#### 2. Import the `ngxFloatButtonModule` in your project:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxFloatButtonModule } from 'ngx-float-button';

@NgModule({
  imports: [BrowserModule, NgxFloatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

##### SharedModule

If you use a [`SharedModule`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-modules) that you import in multiple other feature modules,
you can export the `NgxFloatButtonModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
  exports: [CommonModule, NgxFloatButtonModule]
})
export class SharedModule {}
```

Finally, you can use `ngx-float-button` in your Angular project.

## Sample

The FAB template

```HTML
<ngx-float-button icon="add">
    <ngx-float-item-button icon="person_add" content="float item 1"></ngx-float-item-button>
    <ngx-float-item-button icon="gps_fixed" content="float item 2"></ngx-float-item-button>
    <ngx-float-item-button icon="mode_edit" content="float item 3"></ngx-float-item-button>
</ngx-float-button>
```

## API

#### @Input properties

`ngx-float-button` properties:

- `icon` property expects for `icon_name` listed in Google Material Icons site.

- `[open]` property expects for `BehaviorSubject` type, with this you can open or close the FAB dispatching events.

- `disabled` property expects a `boolean` to toggle if a button is clickable. Defaults to `false`.

- `color` property define the background color and expects a `background:{value}` valid value. Defaults to `#dd0031`.

- `direction` property expects for `string` value type value that's accepted `top`, `right`, `bottom`, `left`. Defaults to `top`

- `spaceBetweenButtons` - property expects a valid number value in `px` to define the space between each `ngx-float-item-button`, Defaults to `55`

Sample: `[open]`

```Typescript
    ...
    //our parent component

    // with 'true' our FAB will be started open.
    public open:BehaviorSubject<boolean> = new BehaviorSubject(true); // true is the initial state of FAB

    ...
```

```HTML
    <div>
        <button md-button (click)="open.next(true)">Open</button>
        <button md-button (click)="open.next(false)">Close</button>
    </div>

    <ngx-float-button icon="add" [open]="open">
    ...
```

Sample: `[direction]`

```HTML
    <div>
        <button md-button (click)="direction='top'">Top</button>
        <button md-button (click)="direction='right'">Right</button>
        <button md-button (click)="direction='bottom'">Bottom</button>
        <button md-button (click)="direction='left'">Left</button>
    </div>

    <ngx-float-button icon="add" direction="{{direction}}">
    ...
```

`ngx-float-item-button` properties:

- `icon` property expects for `icon_name` listed in Google Material Icons site.
- `color` property define the background color and expects a `background:{value}` valid value. Defaults to `white`.
- `disabled` property expects a `boolean` to toggle if a button is clickable. Defaults to `false`.
- `content` property expects `string` value to show additional text in `ngx-float-item-button`

#### @Output property

You can listen the all events emitted by `ngx-float-button` subscribing in the `(events)` observable output.

Sample:

```Typescript
    ...

    output(log) {
        console.log(log);
    }

    ...
```

```HTML
    <ngx-float-button (events)="output($event)">
    ...
```

## Customization

If you need change some css property in `ngx-float-button` you need to use `/deep/` selector in parent css component.

More info about customization soon.

## CSS animations credits

[`The css animations were inspired by this`](https://embed.plnkr.co/gist/00de5ab564446dcb8be067d44e67a692)
