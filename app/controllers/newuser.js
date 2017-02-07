import Ember from 'ember';

export default Ember.Controller.extend({
	firebaseApp: Ember.inject.service(),
	actions: {
		createUser: function() {
		  var email = "testing71@gmail.com";
		  console.log(email);
		  var pass = "password123";
		  console.log(pass);
	      const auth = this.get('firebaseApp').auth();
	      auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
	        const user = this.store.createRecord('user', {
	          id: userResponse.uid,
	          email: userResponse.email
	        });
	        return user.save();
	      });
	    }
	}
});
