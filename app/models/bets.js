import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('string'),
  bettor: DS.attr('string'),
  timestamp: DS.attr('number')
});
