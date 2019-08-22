import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../Redux/store";
import {Dispatch} from "redux";
import styles from "./CaloriesAndMakro.module.css"

interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class CaloriesAndMakro extends PureComponent<Props> {
  render() {
    return (
      <div>
          <table className={styles.Table}>
              <tr>
                  <th>kcal</th>
                  <th>W</th>
                  <th>T</th>
                  <th>B</th>
              </tr>
              <tr>
                  <td>2500</td>
                  <td>200</td>
                  <td>100</td>
                  <td>100</td>
              </tr>
          </table>
          {/*<p>ilość kcal: {this.props.mealRecipe.amountCalories}kcal</p>*/}
          {/*<div className={styles.Makro} >*/}
              {/*<p>węglowodany: {this.props.mealRecipe.amountCarbohydrates}g</p>*/}
              {/*<p>tłuszcze: {this.props.mealRecipe.amountFat}g</p>*/}
              {/*<p>białka: {this.props.mealRecipe.amountProtein}g</p>*/}
          {/*</div>*/}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps) (CaloriesAndMakro);
