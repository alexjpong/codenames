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
        break;
      case 'blue':
        return `${base}blue.png`;
        break;
      case 'spy':
        return `${base}spy.png`;
        break;
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
