import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('project', params.id);
  }
}
