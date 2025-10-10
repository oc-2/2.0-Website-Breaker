# 2.0-Website-Breaker

**NOTE**: seyedeliasfakoorian/2.0-Website-Breaker is **DEPRECATED**, use this repo with npm package instead. **NO INFRIGMENT IN ACTION**

![](https://res.cloudinary.com/oc2/image/upload/v1759879345/website-breaker.png)

## Purpose

The website breaker is for fun and allows you to simulate a breaking effect on your webpages.

[Here](https://2-0-website-breaker.pages.dev/) is a website you can use for more interactive experience.

## Installation

With [node](https://nodejs.org/en/) and [npm](https://npmjs.com) installed, you can run:

```bash
npm install @oc-2/website-breaker
```
## Usage
Using the website-breaker is very simple;

### Vanilla js

```js
// index.js

import breakWebPage from "@oc-2/website-breaker";

document.getElementById("dangerous-button")
        .addEventListener("click", () => breakWebPage());
```

```html
// index.html

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="button.css">
    <script src="index.js"></script>
</head>
<body>
    <button id="dangerous-button"></button>
</body>
</html>
```
### React

The following button will break the webpage-apart whenever its clicked.

```js
import breakWebPage from "@oc-2/website-breaker";

export const BreakButton = () => {
  return (
    <button
      id="break-website-button"
      class="btn"
      // destroys the webpage when clicked
      onClick={() => breakWebPage()}
    >
      Break Me
    </button>
  );
};
```
### Vue

```vue
<template>
   <div class="button" @click="destroy" >
     Break Me
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import breakWebPage from "@oc-2/website-breaker";

export default defineComponent({
  name: "page-destroyer",
  props: {
    msg: String,
  },

  methods: {
    destroy(){
      breakWebPage();
    }
  }
});
</script>
```

## Others
While we only presented examples for vue and react, website-breaker is framework independent and would likely work with all of them.

The website breaker can also be used by the [extension](https://chrome.google.com/webstore/detail/website-breaker/kehlflmgfbkjncaoogcangeeejhbgfnm)
