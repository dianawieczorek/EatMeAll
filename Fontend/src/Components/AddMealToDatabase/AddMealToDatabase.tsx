import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";
import style from '..//WeekSchedule/WeekSchedule.module.css'
import styles from './AddMealToDatabase.module.css'
import SideMenu from "./SideMenu/SideMenu";
import Button from "../UI/Button/Button"


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <div className={style.PageSettings}>
                <div className={classes.TableHeader}>
                    <div className={classes.Label}>Dodaj swój posiłek do bazy</div>
                    <div className={classes.Buttons}>
                    <Button>
                       Dodaj posiłek do bazy
                    </Button>
                    </div>
                </div>
                <div className={["Container", styles.Content].join(' ')}>
                    <div className="row">
                        <div className={["col-md-3", styles.SideMenu].join(" ")}>
                            <SideMenu/>
                        </div>
                        <div className={["col-md-9", styles.Main].join(" ")}>
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
                                <div className={styles.Preparation}>
                                    <h4>Sposób wykonania</h4>
                                    <p>podaj przepis (krok po kroku):</p>
                                    <div>
                                        <input type="text" name="receiptDTO"/>
                                        <button type="button" className="btn btn-dark  btn-number">+</button>
                                        <button type="button" className="btn btn-secondary  btn-number">-</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>);
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
