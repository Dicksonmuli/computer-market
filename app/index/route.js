import Ember from 'ember';

export default Ember.Route.extend({
	// main(index) model hook
	model() {
		return this.store.findAll('computer');
  //   return Ember.RSVP.hash({
  //   computers: this.store.findAll('computer'),
  //   reviews: this.store.findAll('review')
  // });
  },
});
