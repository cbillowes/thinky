(function() {
  if (window.location.href.indexOf("http://localhost") === -1) {
    addComments();
    addSharing();
  }

  function addComments() {
    addScript('//thinky.disqus.com/embed.js');
  }

  function addSharing() {
    addScript('s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55bfba533831db7a');
  }

  function addScript(uri) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//' + uri;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  }
}());


var addthis_share = {
  url_transforms : {
      shorten: {
           twitter: 'bitly'
      }
  },
  shorteners : {
      bitly : {}
  }
}
