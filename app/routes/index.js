import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    let sampleRedCard = this.store.createRecord('codenames-card', {
      word: 'Armadillo',
      team: 'red'
    });

    let sampleBlueCard = this.store.createRecord('codenames-card', {
      word: 'Dog',
      team: 'blue'
    });

    let sampleCivilianCard = this.store.createRecord('codenames-card', {
      word: 'Diamond',
      team: null,
    });

    let sampleSpyCard = this.store.createRecord('codenames-card', {
      word: 'Spy',
      team: 'spy'
    });

    let cards = [sampleRedCard, sampleBlueCard, sampleCivilianCard, sampleSpyCard];

    return this.store.createRecord('codenames-game', {
      cards,
    })

  },

  actions: {
    createPost(newPost) {
      const {title, author, text} = newPost;
      this.store.createRecord('post', {
          title,
          author,
          text,
          createdDate: new Date(),
      })
      .save();
    },
  }
});
