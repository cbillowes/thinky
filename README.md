# Thinky
Versioned [Thinky](http://thinky.co.za) blog created in [Jekyll](http://jekyllrb.com/).

Thinky was created as a development blog focusing on getting developers to ask more questions.
If you would like to contribute, contact me at [@ThinkySocial](https://twitter.com/ThinkySocial).

## Requirements
 - Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
 - Install [Jekyll](http://jekyllrb.com/) gem.

Create a new Jekyll project:

    $ gem install jekyll
    ~ $ jekyll new my-awesome-site
    ~ $ cd my-awesome-site
    ~/my-awesome-site $ jekyll serve
    # => Now browse to http://localhost:4000

## Build

In the console in the project root folder:

    cd _build
    jekyll-serve.bat

A Jeykll server will be created and the site will be accessible via **http://localhost:4000**
Every change will initiate a rebuild on the fly and can be seen by refreshing the browser.
If changes do not appear, check the Jekyll server console for errors.

## Deployments

- Currently manual (SAY WHAT?! - automation imminentish).
- Tag repository with latest version and commit message of "Deployment".
- FTP all files to Thinky server.

## 3rd Party Plugins

 - **Compressor** - Minifies the output of all generated files by removing redundant spaces.
