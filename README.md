# ITunesSearch.js
Javascript client for App Store Lookup based on iTunes Search API

## Overview
This is a simple Javascript client I wrote with Javascript and [React.js](http://facebook.github.io/react/). 

It uses the [ITunes Search API](https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html) to read apps data from the iOS App Store.

## Usage

To run this client as-is, open a web browser at [this address](http://www.musevisions.com/lookup/search.html).


To install and run this client on your machine, follow these instructions (tested on Mac OS X):
<pre>
git clone https://github.com/bizz84/ITunesSearch.js
cd ITunesSearch.js
python -m SimpleHTTPServer 8000 # opens a localhost server with port 8000
</pre>

Next, open a web browser at this address:
<pre>
http://localhost:8000/search.html
</pre>

## Preview

![ITunesSearch.js preview](https://github.com/bizz84/ITunesSearch.js/raw/master/preview/AppStoreLookup.png "ITunesSearch.js preview")

## License
Copyright (c) 2015 Andrea Bizzotto bizz84@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
