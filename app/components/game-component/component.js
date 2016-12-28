import Ember from 'ember';

export default Ember.Component.extend({
  turnNumber: 1,
  redScore: 0,
  blueScore: 0,
  ended: false,

  cards: Ember.computed.oneWay('game.cards'),

  isRedTurn: Ember.computed('turnNumber', function () {
    const turnNumber = this.get('turnNumber');
    return turnNumber % 2;
  }),

  isBlueTurn: Ember.computed.not('isRedTurn'),

  actions: {
    endTurn() {
      const turnNumber = this.get('turnNumber');
      this.set('turnNumber', turnNumber + 1);
    },

    revealHandler(team) {
      console.log(team);
      let turnNumber = this.get('turnNumber');
      let redScore = this.get('redScore');
      let blueScore = this.get('blueScore');
      switch (team) {
        case 'red':
          this.set('redScore', redScore + 1);
          if (this.get('isBlueTurn')) {
            this.set('turnNumber', turnNumber + 1);
          }
          break;
        case 'blue':
          this.set('blueScore', blueScore + 1);
          if (this.get('isRedTurn')) {
            this.set('turnNumber', turnNumber + 1);
          }
          break;
        case 'spy':
          this.set('ended', true);
          break;
        default: // null team
          this.set('turnNumber', turnNumber + 1);
      }
    }
  }

});
