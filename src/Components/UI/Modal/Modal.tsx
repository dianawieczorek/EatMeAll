import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Button from "../Button/Button"



interface OwnProps {
    show:any
    modalClosed:any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Modal extends PureComponent<Props> {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }
    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)'
                    }}
                    >
                    {this.props.children}
                    <Button onClick={this.props.modalClosed}>CANCEL</Button>
                </div>
            </React.Fragment>)
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
