---
slug: su-dung-prismjs-plugin
title: Làm thế nào để sử dụng plugin của prismjs trong markdown file
author: Sinh Bui
author_title: Senior Software Engineer at Hello Health Group
author_url: https://github.com/sinhbuidinh
author_image_url: https://res.cloudinary.com/dflcax7yz/image/upload/v1664337503/Portfolio_SINH/ava_circle_sc8pfc.png
image: https://res.cloudinary.com/dflcax7yz/image/upload/v1664532606/Portfolio_SINH/markdown_g4occz.jpg
tags: [markdown, md file, prismjs]
date: '2022-09-29T09:43:00Z'
---

Khi nhắc tới prism có khá là nhiều plugin hay ho. Hãy cùng mình khám phá một vài plugin hay dùng qua bài blog này nhé! 😉

<!-- truncate-->

## Table of contents

## 0. Line number
- More detail here: https://prismjs.com/plugins/line-numbers/
Example:  

```tsx[class="line-numbers"]
function App() {
  const [title, setTitle] = useState<string>('Example format color reactjs')

  return <p>{title}</p>
}
```

## 1. Highlight line code

- More detail here: https://prismjs.com/plugins/line-highlight/  
Example:

```tsx[data-line="2-5,10"]
(function () {

  if (typeof Prism === 'undefined' || typeof document === 'undefined' || !document.querySelector) {
    return;
  }

  var LINE_NUMBERS_CLASS = 'line-numbers';
  var LINKABLE_LINE_NUMBERS_CLASS = 'linkable-line-numbers';
  var NEW_LINE_EXP = /\n(?!$)/g;

  /**
  * @param {string} selector
  * @param {ParentNode} [container]
  * @returns {HTMLElement[]}
  */
  function $$(selector, container) {
    return Array.prototype.slice.call((container || document).querySelectorAll(selector));
  }
})
```
