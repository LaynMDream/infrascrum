import { Model, attr, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  username: attr,
  firstname: attr,
  lastname: attr,
  email: attr,
  password: attr,
  image: attr,
  role: belongsTo('role'),
  projects: hasMany('project'),
});
