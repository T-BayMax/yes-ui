import React, {Component} from 'react';
import withRoot from '../components/withRoot';
import IconButton from 'material-ui/IconButton'
import Module from '../components/module';
import Paging from '../components/paging';
import LeftBar from '../components/left-bar';
import { withRouter } from 'react-router';
import Search from '../components/search';


const styles = {
    list: {
        display: 'flex',
        paddingLeft:20,
        paddingRight:10,
        flexWrap:'wrap'
    },
    filterIcon: {
        fontSize: 24
    },
    filterIconHeight: {
        height: 60,
        display: 'flex',
        alignItems: 'center'
    },
    search: {
        display: 'inline-flex'
    }
};

class Index extends Component {

    switchGridList = () => {
        let pathname = this.props.history.location.pathname;
        var arr = pathname.split('/');
        arr[1] = 'list';
        if(pathname!==arr.join('/')){
            this.props.history.push(arr.join('/'))
        }
    };

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.filterIconHeight}>
                    <LeftBar />

                    <div style={styles.search}>
                        <Search />
                        <IconButton>
                            <i style={styles.filterIcon} className="iconfont icon-search"/>
                        </IconButton>
                    </div>
                    <div style={styles.flexEnd}>
                        <IconButton onClick={this.switchGridList}>
                            <i style={styles.filterIcon} className="iconfont icon-list"/>
                        </IconButton>
                    </div>
                </div>
                <div>
                    <div style={styles.list}>
                        <Module/>
                        <Module/>
                        <Module/>

                        <Module/>
                        <Module/>
                        <Module/>
                    </div>
                </div>
                <Paging />
            </div>
        );
    }
}

const ShowTheLocationWithRouter = withRouter(Index)
export default withRoot(ShowTheLocationWithRouter);
