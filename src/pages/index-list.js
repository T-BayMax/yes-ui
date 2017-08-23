import React, {Component} from 'react';
import withRoot from '../components/withRoot';
import IconButton from 'material-ui/IconButton'
import Search from '../components/search';
import ModuleList from '../components/module-list';
import Paging from '../components/paging';
import {withRouter} from 'react-router';

const styles = {
    container: {},
    list: {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 10,
        flexWrap: 'wrap'
    },
    search: {
        display: 'inline-flex'
    },
    pages: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    pageButton: {
        margin: 4,
        fontSize: 30,

    },
    pageBlock: {
        width: 377,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    pageIcon: {
        fontSize: 30
    },
    filterIcon: {
        fontSize: 24
    },
    filterIconHeight: {
        height: 60,
        display: 'flex',
        alignItems: 'center'
    },
    flexStart: {
        display: 'flex',
        flex: 1,
    },
    flexEnd: {
        display: 'flex',

    }
};

class Index extends Component {

    switchGridList = () => {
        this.props.history.push('/grid')
    };

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.filterIconHeight}>
                    <div style={styles.flexStart}>
                        <IconButton>
                            <i style={styles.filterIcon} className="iconfont icon-all"/>
                        </IconButton>
                        <IconButton>
                            <i style={styles.filterIcon} className="iconfont icon-team"/>
                        </IconButton>
                        <IconButton>
                            <i style={styles.filterIcon} className="iconfont icon-mine"/>
                        </IconButton>
                        <div style={styles.search}>
                            <Search/>
                        </div>
                    </div>

                    <div style={styles.flexEnd}>
                        <IconButton onClick={this.switchGridList}>
                            <i style={styles.filterIcon} className="iconfont icon-liebiao"/>
                        </IconButton>
                    </div>
                </div>
                <div>
                    <ModuleList/>
                </div>
                <Paging />
            </div>
        );
    }
}

const ShowTheLocationWithRouter = withRouter(Index)
export default withRoot(ShowTheLocationWithRouter);
