# Bootstrap 4 Tree View

---

[![npm version](https://img.shields.io/npm/v/bstreeview.svg?style=flat)](https://www.npmjs.com/package/bstreeview)

A very simple plugin to build a basic and elegant Treeview with boostrap 4.

![Bootstrap Tree View Default](https://github.com/chniter/bstreeview/blob/master/screeshots/bstreeview.PNG?raw=true)

## Dependencies

Where provided these are the actual versions bootstrap-treeview has been tested against.  

- [Bootstrap v4.4.1 (>= 4.3.1)](http://getbootstrap.com/)
- [jQuery v3.4.1 (>= 1.9.0)](http://jquery.com/)


## Getting Started

### Install

You can install using npm (recommended):

```javascript
$ npm install bstreeview
```

or [download](https://github.com/chniter/bstreeview/releases/tag/v1.0.0) manually.



### Usage

Add the following resources for the bootstrap-treeview to function correctly.

```html
<!-- Required Stylesheets -->
<link href="bootstrap.css" rel="stylesheet">

<!-- Required Javascript -->
<script src="jquery.js"></script>
<script src="bstreeview.js"></script>
```

The component will bind to any existing DOM element.

```html
<div id="tree"></div>
```

Basic usage may look something like this.

```javascript
function getTree() {
  // Some logic to retrieve, or generate tree structure
  return data;
}

$('#tree').bstreeview({ data: getTree() });
```


## Data Structure

In order to define the hierarchical structure needed for the tree it's necessary to provide a nested array of JavaScript objects.

Example

```javascript
var tree = [
  {
    text: "Node 1",
    icon: "fa fa-folder",
    nodes: [
      {
        text: "Sub Node 1",
        icon: "fa fa-folder",
        nodes: [
          {
            text:  "Sub Child Node 1",
            icon:  "fa fa-folder",
            class: "nav-level-3",
            href:  "#option/1.1.1"
          },
          {
            text: "Sub Child Node 2",
            icon: "fa fa-folder"
          }
        ]
      },
      {
        text: "Sub Node 2",
         icon: "fa fa-folder"
      }
    ]
  },
  {
    text: "Node 2",
    icon: "fa fa-folder"
  },
  {
    text: "Node 3",
    icon: "fa fa-folder"
  },
  {
    text: "Node 4",
    icon: "fa fa-folder"
  },
  {
    text: "Node 5",
    icon: "fa fa-folder"
  }
];
```

This property `text` is required to display nodes.

```javascript
{
  text: "Node 1"
}
```

Yes, we can make some options for bstreeview, i will explain them later :p

```javascript
{
  
```

### Node Properties

#### text
`String` `Mandatory`

The text value displayed for a given tree node.

#### icon
`String` `Optional`

The icon displayed on a given node.

#### href
`String` `Optional`

A custom `href` attribute value for a given node.

#### class
`String` `Optional`

A class name or space separated list of class names to add to a given node.



## Options

```javascript
// Example: initializing the bstreeview
$('#tree').treeview({
  data: data         // data is required
});
```

## Methods


## Events





## Copyright and Licensing
Copyright 2020 Sami CHNITER

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
