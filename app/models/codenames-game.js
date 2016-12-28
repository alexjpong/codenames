import DS from 'ember-data';

export default DS.Model.extend({
  cards: DS.hasMany('codenames-card'),
});
