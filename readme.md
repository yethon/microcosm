# <a href="http://microcosm.site" target="_blank">microcosm</a>
A starter project to help you create, build and deploy your own simple, static and responsive microsite.

Uses the responsive CSS of skeleton. Visit <a href="http://getskeleton.com" target="_blank">getskeleton.com</a> for features and implementation details.

## Getting started

There are 2 ways to get started:

- Visit <a href="http://microcosm.site" target="_blank">microcosm</a> for the .zip and all the instructions
- Clone the repo

### What's in the repo?

A starter site and most importantly, all of the tools required for a sane and painless workflow.

- Gulp manages your server, creates your build and watches for any changes
- Browsersync lets you interact with your site on multiple browsers, simultaneously

### Prerequisites

Install <a href="http://nodejs.org" target="_blank">node</a>, join <a
href="https://github.com/join" target="_blank">github</a>, set up <a
href="https://help.github.com/articles/set-up-git/"
target="_blank">git</a> and create your <a
href="https://pages.github.com/" target="_blank">site
repository</a>.

### Instructions

If you plan on deploying your site to github, clone this repository into your **username.github.io** folder.

```
$ git clone git@github.com:yethon/microcosm.git
```

You should now have a folder with the following structure:

```
folder/
└── username.github.io/
    ├── assets/
    │   ├── img/
    │   │   ├── GitHub-Mark-Light.png
    │   │   ├── blurred_lines-min.jpeg
    │   │   └── favicon.png
    │   ├── js/
    │   │   └── functions.js
    │   └── styles/
    │       ├── microcosm.scss
    │       ├── normalize.css
    │       └── skeleton.css
    ├── index.html
    └── tasks/
    ├── gulpfile.js
    ├── package.json
```

Install and Serve!

```
$ npm install
$ gulp serve
```

Make all of your changes to index.html and in the assets/ folder.

Maintain the established file structure or update the gulp tasks to handle any changes.

When you're ready to deploy:

```
$ git add .
$ git commit -m 'My Microsite'
$ git push
```

*If you'd like to deploy your site elsewhere, it's packaged in the dist/ folder. It's always uglified and up to date! Just copy & paste whenever you're ready.*

## Need some inspiration?

- High resolution photos: <a href="https://unsplash.com" target="_blank">unsplash</a>
- Icons: <a href="https://thenounproject.com" target="_blank">the noun
  project</a>
- Color scheme generator: <a href="https://coolors.co" target="_blank">coolers</a>

## License

[open-source MIT license](https://github.com/dhg/Skeleton/blob/master/LICENSE.md)

## FYI

The microcosm icon is from the <a href="https://thenounproject.com/GregSuj/collection/beyond-the-infinite/" target="_blank">Beyond the Infinite</a> collection created by <a href="http://gregory.sujkowski.fr/" target="_blank">Gregory
Sujkowski</a>
