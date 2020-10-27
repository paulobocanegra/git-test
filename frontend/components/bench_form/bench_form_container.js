import { connect } from 'react-redux';

import { createBench } from '../../actions/bench_actions';
import BenchForm from './bench_form';



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchForm);
