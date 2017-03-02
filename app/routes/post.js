import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  calorie: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  review: DS.hasMany('review', { async: true })
});
