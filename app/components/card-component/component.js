import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flex-20'],
  word: Ember.computed.oneWay('card.word'),
  team: Ember.computed.oneWay('card.team'),
  isRevealed: false,

  image: Ember.computed('team', function () {
    const base = '/assets/images/';
    const team = this.get('team');

    switch (team) {
      case 'red':
        return `${base}red.png`;
      case 'blue':
        return `${base}blue.png`;
      case 'spy':
        return `${base}spy.png`;
      default:
        return `${base}civilian.png`;
    }
  }),

  actions: {
    revealCard() {
      this.set('isRevealed', true);
      this.sendAction('revealHandler', this.get('team'));
    }
  },
});
