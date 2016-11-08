var widgets = [];
var queue = [];

addWidget(287528029);
addWidget(288700921);

function addWidget(trackId) {
  var widget = { };
  widget.id = trackId;
  widget.iframe = document.createElement('iframe');
  widget.iframe.src = 'http://w.soundcloud.com/player/?url=' + 
    'http://api.soundcloud.com/tracks/' 
    + trackId + 
    '&auto_play=false&single_active=false';

  widget.scWidget = SC.Widget(widget.iframe);


  widget.scWidget.bind(SC.Widget.Events.PLAY, function(eventData) {
    console.log('Playing Widget2');
  });

  var widgetDiv = document.getElementById('widgets');
  widgetDiv.appendChild(widget.iframe);

  widgets.push(widget);
  return widget;
}

function playAll() {
  widgets.forEach(widget => {
    widget.scWidget.play();
  });
}

function pauseAll() {
  widgets.forEach(widget => {
    widget.scWidget.pause();
  });
}
