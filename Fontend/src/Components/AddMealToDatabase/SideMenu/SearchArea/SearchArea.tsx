import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from '../../AddMealToDatabase.module.css'

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SideMenu extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.SearchArea}>
                <form action="">
                    <div className=" bg-light rounded rounded-pill shadow-sm">
                        <div className="input-group">
                            <input type="search" placeholder="czego szukasz" aria-describedby="button-addon3"
                                   className="form-control bg-none border-0"/>
                            <div className="input-group-append border-0">
                                <button id="button-addon1" type="submit"
                                        className="btn btn-light text-secondary">szukaj
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <p>rodzaj</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="protein" value="protein"/>
                    <label className="form-check-label">białkowy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="carbs" value="carbs"/>
                    <label className="form-check-label">węglowy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="fat" value="fat"/>
                    <label className="form-check-label">tłuszczowy</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
