import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from '../AddMealToDatabase.module.css'
import MealPrep from "./MealPrep/MealPrep";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <form>
                <input className={styles.NameInput} type="text" name="title"
                       placeholder="nazwa posiłku"/>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>Pora posiłku: </p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="breakfast"
                                   value="breakfast"/>
                            <label className="form-check-label">śniadanie</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="lunch"
                                   value="lunch"/>
                            <label className="form-check-label">2 śniadanie</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="dinner"
                                   value="dinner"/>
                            <label className="form-check-label">obiad</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="snack"
                                   value="snack"/>
                            <label className="form-check-label">podwieczorek</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="supper"
                                   value="supper"/>
                            <label className="form-check-label">kolacja</label>
                        </div>
                        <p>czas przygotowania: <input type="text" name="5"
                                                      placeholder="podaj ilość minut"/></p>
                        <p>autor przepisu: <input type="text" name="authorReceipt"/></p>
                    </div>
                </div>
                <div className={styles.Products}>
                    <h4 className={styles.MealRecipe}>Składniki</h4>
                    <table className={[styles.Table, "table table-striped"].join(" ")}>
                        <thead>
                        <tr>
                            <th scope="col">Nazwa</th>
                            <th scope="col">ilość g/ml</th>
                            <th scope="col">ilość słownie</th>
                            <th scope="col">kcal</th>
                            <th scope="col">białko</th>
                            <th scope="col">tłuszcz</th>
                            <th scope="col">węgle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">chleb żytni</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">SUMA:</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <MealPrep/>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
