import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo');
  this.route('search', function() {
    this.route('results', {path: ":term"}); // dynamic segment
  });
});

export default Router;
