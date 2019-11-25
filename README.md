# SlideTemplate

A simple slide template for Carnap with minimal dependencies

## Installation

You'll need to install npm, node.js, and gulp-cli. 

For the first two, on the mac, I recommend the 
[homebrew method](http://osxdaily.com/2018/06/29/how-install-nodejs-npm-mac/). 
Once those are installed, run `sudo npm install -g gulp-cli` in a terminal to install gulp.

You can then get everything you need for the slides by cloning this repository and running
`npm install` within the cloned directory.

## Editing slides

Edit the files under `src` to change the content and appearence of the slides. 
From within the `SlideTemplate` directory, run `gulp serve` in a terminal to make 
your slides in your web browser at the URL http://localhost:8080/slides-1.html.

You can add more html files to the src directory to include multiple sets of slides
(for example,for multiple lectures) within your project.

## Deploying slides

To put your slides online, you'll need to fork the SlideTemplate repository, and perhaps
change the name of your fork to something more descriptive, like MySlides. You'll then 
want to make a clone of your fork (or change the remote of a preexisting local clone).
Once you've done this, you can run `gulp deploy` within the cloned directory to put your 
slides online. The slides for a file "slides-1.html" will then be available at the url

https://YOURGITHUBNAME.github.io/MySlides/slides-1.html. 

To update the slides, just run `gulp deploy` again.

## More Information

All of this is based on the build system for BespokeJS. You can find lots of more detailed 
documentation at [their github page](https://github.com/bespokejs/generator-bespoke).
