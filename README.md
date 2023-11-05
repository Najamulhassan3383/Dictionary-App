# Dictionary Web App - Frontend Mentor Challenge

[![Deploy Site to GitHub Pages](https://github.com/jefcooper/fem-dictionary-web-app/actions/workflows/static.yml/badge.svg)](https://github.com/jefcooper/fem-dictionary-web-app/actions/workflows/static.yml)
![Vercel](https://vercelbadge.vercel.app/api/jefcooper/fem-dictionary-web-app)

- Live on Github Pages: https://jefcooper.github.io/fem-dictionary-web-app
- Live on Vercel: https://fem-dictionary-web-app.vercel.app/#keyboard

This is a solution to the [Dictionary Web App](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge) 
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

This challenge requires calling an api to retrieve dictionary word definitions and displaying them. The api chosen for this is [dictionaryapi.dev](https://dictionaryapi.dev).

This is a simple api call with a somewhat challenging response format. It is based on wikitext which is freeform, so there are often inconsistencies in the json that is returned, depending on word. For example, the audio file reference may be in second or third pronunciation slot in the returned array depending on what the article author did on wiktionary.

Themes throws in a new wrinkle with font themes of Sans-serif, Serif, Monospaced, along with the more typical day/night color scheme switching. Automatic system switching is also implemented.

An `<audio>` element is required in order to play mp3, ogg, etc. for the word pronunciation. The custom button requires that the audio element have controls hidden and be controlled through api only.

The web page must be fully accessible and support full keyboard navigation. This requires a custom dropdown menu implementation with appropriate aria usage to replace the intrinsic system accessibility normally available in `<select>`.

To add to the utility of the page, permalink hashes are added to the URL. This allows any search to be bookmarked and for back/forward browser navigation to act as a search history.

An accessible busy spinner and live region is used in this implementation. During development, the dictionaryapi.dev site went down for several hours. This forced better error handling, timeout handling etc.



### Links

- Live on Vercel: [Vercel](https://dictionary-app012345.netlify.app/)

## My process

### Built with

- dictionaryapi.dev
- Semantic HTML5 markup
- Mobile-first workflow
- Vercel hosting

### To Do


### Future

- animated transitions

### Useful resources

- Wikimedia API https://www.mediawiki.org/wiki/API:Main_page
- https://dictionaryapi.dev/


#### Tooling

- https://www.joshwcomeau.com/css/custom-css-reset/
- https://svg-sprite-generator.vercel.app/
- https://medium.com/swlh/better-ways-to-organise-css-properties-9a066e7ded62
- https://vercel.com



## Author

- Website - [Najam ul Hassan](https://najamulhassan.me/)
