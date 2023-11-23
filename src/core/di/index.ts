/* eslint-disable react-hooks/rules-of-hooks */
import infrastructures from './infrastructures';
import repositories from './repositories';
import actions from './actions';
import presenters from './presenters';
import useCases from './useCases';

const cInfrastructures = infrastructures();
const cRepositorires = repositories(cInfrastructures);
const cUseCases = useCases(cRepositorires);
const cActions = actions();
const cPresenters = presenters(cUseCases, cActions);

export default {
  session: cPresenters.session,
  detailWeather: cPresenters.detailWeather,
};
