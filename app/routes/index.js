import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    posts: this.store.findAll('post'),
    reviews: this.store.findAll('review')
  });
   },
  
});
