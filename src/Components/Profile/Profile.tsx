import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../Redux/store";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Profile extends PureComponent<Props> {
    render() {
        return (
            <div>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStore) => {
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
