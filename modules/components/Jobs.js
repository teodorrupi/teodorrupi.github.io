/**
 * Created by teodor on 21/02/17.
 */
import React, { PropTypes, Component } from 'react'

export default class Jobs extends Component {
    render() {
        return (
            <ul>
                {this.props.jobs.map((job, i) =>
                    <li key={i}>
                        {job.name}
                    </li>
                )}
            </ul>
        )
    }
}

Jobs.propTypes = {
    jobs: PropTypes.array.isRequired
};
