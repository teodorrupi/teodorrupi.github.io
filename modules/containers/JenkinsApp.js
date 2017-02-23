/**
 * Created by teodor on 21/02/17.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchJobsIfNeeded} from '../actions'
import Jobs from '../components/Jobs'
import Add from '../containers/Add'

class JenkinsApp extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchJobsIfNeeded());
    }


    render(){
        const { jobs, isFetching, lastUpdated } = this.props;
        return (
            <div>
                <Add/>
                <p>
                    {lastUpdated &&
                    <span>
                    Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                    }
                    {!isFetching &&
                    <a href='#'
                       onClick={this.handleRefreshClick}>
                        Refresh
                    </a>
                    }
                </p>
                {isFetching && jobs.length === 0 &&
                <h2>Loading...</h2>
                }
                {!isFetching && jobs.length === 0 &&
                <h2>No Jobs found!</h2>
                }
                {jobs.length > 0 &&
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Jobs jobs={jobs}/>
                </div>
                }
            </div>
        )
    }
}

JenkinsApp.propTypes = {
    jobs: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { jobsByJenkins } = state
    const { isFetching, lastUpdated, items: jobs} = jobsByJenkins['test'] || {
        isFetching: true,
        items: []
    }

    return {
        jobs,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(JenkinsApp)