import DS from 'ember-data';

export default DS.Model.extend({
  word: DS.attr('string'),
  team: DS.attr('string'),
});
