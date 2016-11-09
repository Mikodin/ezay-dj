var widgets = [];
var queue = [];
var index = 0;

addWidget(287528029);
addWidget(288700921);

function addWidget(trackId) {
  var div = document.createElement('div');
  div.id = trackId;
  div.className = 'widget';

  var addQueueBtn = document.createElement('button');
  addQueueBtn.type = 'button';
  addQueueBtn.addEventListener('click',function() { addTrackToQueue(widget) });
  addQueueBtn.innerHTML = 'Add To Queue';

  var playFromLocation = document.createElement('input');
  playFromLocation.type = 'number'
  playFromLocation.id = trackId + 'playFromLoc';
  playFromLocation.name = trackId + 'playFromLoc';

  var widgetsDiv = document.getElementById('widgets');

  var widget = { };
  widget.id = trackId;
  widget.iframe = document.createElement('iframe');
  widget.iframe.src = 'http://w.soundcloud.com/player/?url=' + 
    'http://api.soundcloud.com/tracks/' 
    + trackId + 
    '&auto_play=false&single_active=false';
  widget.scWidget = SC.Widget(widget.iframe);


  addListeners(widget);

  div.appendChild(widget.iframe);
  div.appendChild(addQueueBtn);
  div.appendChild(playFromLocation);

  widgetsDiv.appendChild(div);

  widgets.push(widget);
  return widget;
}

function addListeners(widget) {
  widget.scWidget.bind(SC.Widget.Events.PLAY, function(eventData) {
    console.log('Playing Widget');
    widget.eventData = eventData;
  });

  widget.scWidget.bind(SC.Widget.Events.PLAY_PROGRESS, function(eventData) {
    widget.eventData = eventData;
  });

  widget.scWidget.bind(SC.Widget.Events.FINISH, function(eventData) {
    widget.eventData = eventData;
    playNextInQueue();
  });
  console.log(widget);
}

function addTrackToQueue(widget) {
  console.log(widget);
  var ol = document.getElementById('queueList');
  var li = document.createElement('li');
  li.innerHTML = widget.id;
  ol.appendChild(li);
  queue.push(widget);
}

function playNextInQueue() {
  index ++;
  playById(queue[index].id);
}

function playQueue() {
  playById(queue[index].id);
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

function playById(trackId) {
  var widget = getWidget(trackId);

  if (widget) {
    widget.scWidget.play();
    return true;
  } else 
    return false;
}

function getWidget(trackId) {
  return widgets.find(widget => {
    return widget.id === trackId;
  });
}

function getPosition(trackId) {
  var widget = getWidget(trackId);
  return widget.scWidget.getPosition(item => {
    console.log(item);
    return item;
  });
}

function getDuration(trackId) {
  var widget = getWidget(trackId);
  let dur = 0;
  widget.scWidget.getDuration(item => {
    console.log(item);
    dur = item;
    return item;
  });
}
