import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from '../../../AddMealToDatabase.module.css'

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
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
