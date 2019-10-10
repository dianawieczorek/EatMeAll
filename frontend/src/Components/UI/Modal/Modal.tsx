import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Button from "../Button/Button"
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";
import {closeModal} from "../../../Redux/actions";



interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Modal extends PureComponent<Props> {

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.visible} clicked={this.closeModal}/>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.visible ? 'translateY(0)' : 'translateY(100vh)'
                    }}
                    >
                    {this.props.data}
                    <Button onClick={this.closeModal}>CANCEL</Button>
                </div>
            </React.Fragment>)
    }

    closeModal = () => {
        this.props.closeModal();
    };
}

const mapStateToProps = (store:AppStore) => {
    return {
        visible: store.modalReducer.visible,
        data: store.modalReducer.data
    };
};

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        closeModal: () => dispatch(closeModal())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
