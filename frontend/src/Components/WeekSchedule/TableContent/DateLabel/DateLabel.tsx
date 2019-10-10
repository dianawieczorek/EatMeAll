import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./DateLabel.module.css"
import Moment from 'react-moment'

interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class DateLabel extends PureComponent<Props> {
  render() {
      const date='2019-04-19T12:59-0500';
      return (
        <Moment format="DD.MM.YYYY" className={styles.Date}>{date}
        </Moment>
    );
  }
}


const mapStateToProps = (state: AppStore) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DateLabel);
