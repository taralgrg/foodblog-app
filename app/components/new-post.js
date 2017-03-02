import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        calorie: this.get('calorie'),
        type: this.get('type'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
