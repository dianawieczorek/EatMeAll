import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../Redux/store";
import {Dispatch} from "redux";

interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class List extends PureComponent<Props> {

  render() {
      const { list } = this.props;
    return (
      <div>
        <ol>
            {list.map((item: string) => <li>{item}</li>)}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => {
  return {
    list: state.listReducer.itemList
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);