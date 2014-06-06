var BANNED_LINKS = [
  'http://www.reddit.com/',
  'http://www.youtube.com/'
];

$(function () {
  $.get('sites.json', function (parsed) {
    // Web browsers change the URL after it is added.
    var formatted = {};

    _.each(parsed, function (tags, url) {
      var a = document.createElement('a');
      a.href = url;
      a.innerHTML = '▇'

      if (BANNED_LINKS.indexOf(a.href) === -1) {
        document.body.appendChild(a);
      }

      formatted[a.href] = tags;
    }),
      clickedLinks = [];

    $('#loading-cover').fadeOut('fast');
    window.done = function done() {
      var timesClicked = {};
      _.each(clickedLinks, function (link) {
        var tags = formatted[link];
        _.each(tags, function (tag) {
          if (timesClicked[tag] === undefined) {
            timesClicked[tag] = 0;
          }
          timesClicked[tag] += 1;
        })
      });

      var sorted = _(timesClicked)
        .map(function (times, interest) {
          return {
            interest: interest,
            times: times
          }
        })
        .sortBy('times')
        .reverse()
        .value(),

        ol = document.createElement('ol');

      _.each(sorted, function (data) {
        var li = document.createElement('li');
        li.innerHTML = data.interest;
        ol.appendChild(li);
      })

      document.body.innerHTML = '<h1>Your interests are:</h1>';
      document.body.appendChild(ol);
    };

    $('a').click(function (e) {
      e.preventDefault();
      $(this).addClass('clicked');
      clickedLinks.push(this.href);
      return false;
    });
  });
});

