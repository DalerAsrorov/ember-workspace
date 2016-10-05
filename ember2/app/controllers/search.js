import Ember from 'ember';

export default Ember.Controller.extend({
  // does it have to be named actions?
  actions: {
    search: function(e) {
      e.preventDefault();
      console.log("form submitted...");
      var searchTerm = this.get("searchTerm");
      this.transitionToRoute('search.results', searchTerm);
    }
  }
});
