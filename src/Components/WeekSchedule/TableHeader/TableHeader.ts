import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";

interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TableHeader extends PureComponent<Props> {
  render() {
    return ();
  }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
