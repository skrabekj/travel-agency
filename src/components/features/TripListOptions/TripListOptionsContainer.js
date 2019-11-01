import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, changeSearchTags } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchTags: tags => dispatch(changeSearchTags(tags)),
  changeDurationFrom: from => dispatch(changeDurationFrom(from)),
  changeDurationTo: to => dispatch(changeDurationTo(to)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
