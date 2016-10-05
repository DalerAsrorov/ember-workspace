import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  isExplicit: Ember.computed('song.trackExplicitness', function() {
    return this.get('song.trackExplicitness') === 'explicit';
  })
});
