import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TableContent extends PureComponent<Props> {
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

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);
