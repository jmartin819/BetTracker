import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', 
      	{ 
      		provider: provider, 
      		email: this.get('email'), 
      		emailset: this.set('email',''),
      		password: this.get('password'),
      		passwordset: this.set('password','')
      	}).then(function(data) {
        console.log(data.currentUser.email);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});