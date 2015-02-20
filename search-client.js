function parseITunesJSON(json) {

  if (json.results.length == 0) {
    return;
  }
  var result = json.results[0];
  console.log(result);

  $('#loadImage')[0].src             = result["artworkUrl100"]
  $('#app-description')[0].innerHTML = result["description"]
  $('#app-title')[0].innerHTML       = result["trackName"]
  $('#app-author')[0].innerHTML      = result["artistName"]
}

// Method shared between searchInput and searchButton
function validateAndSubmit(e) {

  var inputURL = document.getElementById('search').value;
  var appId = appIdFromInputString(inputURL); // input-validation.js
  if (appId == '') {
    alert('Invalid App Store Id or URL from input: ' + inputURL);
    return;
  }

  var searchURL = 'https://itunes.apple.com/lookup?id=' + appId + '&entity=software'

  $.ajax({
              crossDomain: true,
              type:"GET",
              contentType: "application/json; charset=utf-8",
              async:true,
              url: searchURL,
              dataType: "jsonp",
              success : function(json)
              {
                  parseITunesJSON(json);
              },
              error: function(e) {
                  console.log("error: " + e.message);
              }
              // jsonpCallback: 'fnsuccesscallback'
          });
}

var SearchForm = React.createClass({
  render: function() {
    var searchInputId='search'
    return (
      <div className="searchForm">
        <div class="header">
          <h2>App Store Lookup</h2>
        </div>
        <div class="description">
          <p>Copy-paste an App store URL or ID to get app information</p>
        </div>
        <SearchInput />
        <SearchButton />
        <br/>
        <AppImage />
        <div class="header">
          <h2 id="app-title"></h2>
          <h2 id="app-author"></h2>
        </div>
        <div class="description">
          <p id="app-description"></p>
        </div>
      </div>
    );
  }
});

var SearchInput = React.createClass({
  render: function() {
    return (
      <div className="searchInput">
        <input type="text" class="button" id="search" name="search" placeholder="App Store ID or URL" onKeyDown={this.handleKeyDown} />
      </div>
    );
  },
  handleKeyDown: function(e) {
    if (typeof e == 'undefined' && window.event) { e = window.event; }
    if (e.keyCode == 13)
    {
      validateAndSubmit(e);
    }
  }
});

var SearchButton = React.createClass({
  render: function() {
    return (
      <div className="searchButton">
        <input type="submit" class="button" id="submit" value="SEARCH" onClick={this.handleSubmit} />
      </div>
    );
  },
  handleSubmit: function(e) {
    validateAndSubmit(e);
  }
});

var AppImage = React.createClass({

  render: function() {
    return (
      <div className="appImage">
        <img id="loadImage" />
      </div>
    );
  }
});

React.render(
  <SearchForm />,
  document.getElementById('content')
);
