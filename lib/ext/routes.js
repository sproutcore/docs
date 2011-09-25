
SC.routes.currentLocationDidChange = function(){
  this.set('location', this.get('currentLocation'));
};

SC.routes.addObserver('currentLocation', SC.routes, 'currentLocationDidChange');

SC.routes.locationDidChange = function(){
  var location = this.get('location'),
      current  = this.get('currentLocation');

  if (location !== current) {
    this.trigger();
    this.set('currentLocation', location);
  }
};
