import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    submitbet: function() {
      var newBet = this.store.createRecord('bets', {
        amount: this.get('amount'),
        amountset: this.set('amount',''),
        bettor: this.get('bettor'),
        bettorset: this.set('bettor',''),
        acceptor: this.get('acceptor'),
        acceptorset: this.set('acceptor',''),
        description: this.get('description'),
        descriptionset: this.set('description',''),
        timestamp: new Date().getTime()
      });
      newBet.save();
    }
  }
});
