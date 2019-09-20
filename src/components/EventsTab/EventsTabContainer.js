import {compose, setDisplayName} from 'recompose';
import {connect} from 'react-redux';
import EventsTab from './EventsTab';

export const mapStateToProps = state => ({
    events: state.events
});

export const enhance = compose(
    setDisplayName('EventsTabContainer'),
    connect(
        mapStateToProps,
        null
    )
)

export default enhance(EventsTab);