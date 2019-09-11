# cereal-writer
**an s3 url rewriter chrome extension**

Intended to rewrite s3 urls so non-public s3 object links can be downloaded

## setup

currently:
0. clone this repository, or download a zipped source folder from github and unzip it to a directory
0. in chrome, navigate to `chrome://extensions`
0. enable developer mode (upper right toggle)
0. click load unpacked, and navigate to the source directory

## usage

none yet


## development

The current approach is to substitute the s3 object path in an original url, into a url for that object's s3 console page.
