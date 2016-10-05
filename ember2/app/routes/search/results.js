import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // var url = "https://itunes.apple.com/search?term=" + params.term + "&callback=?";
    var url = `https://itunes.apple.com/search?term=${params.term}&callback=?`
    return $.getJSON(url);
  },
  afterModel: function(model) {
    console.log(model);
  }
});
