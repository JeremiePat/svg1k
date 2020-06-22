# PROJECT INTENT

SVG is an underrated web technology that provides awesome features to the web technology stack. Many of its early features has been added to CSS and it still provides unique abilities for web authors.

The SVG1K project intend to showcase how far it's possible to go when creative creators are limited to 1Ko of data.

This aim to serve two pedagogic purpose:

1. web authors who wish to experiment with SVG have a nice playground that will force them to workaround some inherent preconceived ideas regarding SVG (such as: declarative text format are bloated). Producing interesting demo within a given set of limitation requires to learn the details of the technology to be used.

2. Web authors who wish to learn more about SVG will have access to advanced examples but with a small footprint which make things easier to explore and to understand.

If you are a web developer/designer, even new at SVG, you should consider contributing to this project, it's a fun way to show your creativity as well as your technical skills while learning new stuff.


# CONTRIBUTION

Contribution to that project can take several forms:

1. [Submitting a demo](#submitting-a-demo)
2. [Reviewing demos](#reviewing-demos)
3. [Encouraging people to contribute](#encouraging-people-to-contribute)
4. [Spreading the word](#preading-the-word)
5. [Improving the project infrastructure](#improving-the-project-infrastructure)

> **NOTE:** _Be aware that all content contributed to this repository are made under the terms of [the CC0 1.0 Public Domain license](https://creativecommons.org/publicdomain/zero/1.0/)_

## Submitting a demo

This is very likely the core contribution to the project and it's super easy if you follow this steps:

1. Create an amazing standalone, non-compressed, SVG file which is less or equal than 1Ko (1024 characters). By standalone we mean it must be understood as a valid SVG file by web browsers, in other words you don't need to add the XML prologue but you must add the SVG namespace on the outermost SVG element.

2. Submit your contribution. Such a submission can be done in two different ways:
   1. Create a pull request against that repository with your SVG file within the `img` folder and the details of your submission within the `js/entries.js` file (the name of your file, and optionally, your name/pseudo and an optional link for credits)
   2. create your kick ass SVG demo anywhere you want (for example, [codepen.io](https://codepen.io/), [dabblet](https://dabblet.com/), [jsfiddle](https://jsfiddle.net/), etc.), then if you have no one around you that could handle the PR for you, feel free to ping **@JeremiePat** (either by _[opening an issue](https://github.com/JeremiePat/svg1k/issues)_, on _[twitter](https://twitter.com/JeremiePat)_, or by _e-mail_) to get your submission included.

We strongly prefer contribution through PR but we also understand that not everybody is at ease with Git. Just be aware that submission made outside a GitHub PR will take longer to be included.

> **NOTE:** _Currently we want to get stick to 1Ko, however we are considering to change that limit or to create new categories at some point in the future. Please convince us that your submission is so crazy and push the limit of the technology so fare that we should accept it._

## Reviewing demos

Everyone is welcome to review demos and to provide feedback in order to improve incoming demos. While reviewing, we encourage you to check on the followings:

1. Check for technicals "no-go"
   1. Make sure the submission isn't compressed (no `.svgz` file) because compression is going against our pedagogic intent.
   2. Make sure the submission is a valid standalone SVG document (i.e. It can be open within a browser without any error)
   3. Make sure the submission is working both on Firefox and Chrome (Safari support is a plus but not a hard requirement).
   4. Make sure the outermost SVG element do not contain the `width` and `height` attribute (because we want the file to scale regardless of the display context)

2. Check for area of improvement/polish
   1. Can the demo be smaller?
   2. Can the demo be more impressive?

Please, checkout our [code of conduct](CODE_OF_CONDUCT.md) before performing any review.

## Encouraging people to contribute

Another way to contribute to the project is to encourage people to contribute (this is some sort of a meta contribution). This can be done is several ways: Mentoring people, organizing events, teaching SVG and using SVG1K as a learning achievement, providing resources to create great demos, etc.

If you do so, please notify us so that we can spread the word.

> **NOTE:** _If you are organizing events, we do not endorse them and you are sole responsible for them. Any events or action that wish to claim to contribute to the SVG1K project must comply with our code of conduct._

## Spreading the word

SVG1K is a small new project, and helping increasing its visibility is an awesome contribution. Feel free to use the hash tag **#SVG1K** on social medias.

## Improving the project infrastructure

At that point, the project home page is a very simple GitHub page. Do not hesitate to help make it better. We have plan for the future but any help is welcome.
