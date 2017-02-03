import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishBet: function() {
      var newBet = this.store.createRecord('bets', {
        amount: this.get('amount'),
        bettor: this.get('bettor'),
        timestamp: new Date().getTime()
      });
      newBet.save();
    }
  }
});