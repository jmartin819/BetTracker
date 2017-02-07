import DS from 'ember-data';

export default DS.Model.extend({
	email: DS.attr(),
  	pass: DS.attr()
});
