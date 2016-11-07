var iframe1 = document.querySelector('#widget1');
iframe1.src = 'http://w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/288700921&auto_play=false&single_active=false';

var widget1 = SC.Widget(iframe1);

widget1.bind(SC.Widget.Events.PLAY, function(eventData) {
  console.log('Playing Widget1');
});

var iframe2 = document.querySelector('#widget2');
iframe2.src = 'http://w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/287528029&auto_play=false&single_active=false';

var widget2 = SC.Widget(iframe2);

widget2.bind(SC.Widget.Events.PLAY, function(eventData) {
  console.log('Playing Widget2');
});
