import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";
import style from '..//WeekSchedule/WeekSchedule.module.css'
import styles from './AddMealToDatabase.module.css'
import SideMenu from "./SideMenu/SideMenu";
import Button from "../UI/Button/Button"
import AddMealForm from "./AddMealForm/AddMealForm";
import {PostMealRecipieDto} from "../../ServerConnection/DTOs/MealRecipeDto";
import {async} from "q";
import {AppStore} from "../../Redux/store";
import {ProductWholeDataDto} from "../../ServerConnection/DTOs/AllProductsDto";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <div className={style.PageSettings}>
                <div className={classes.TableHeader}>
                    <div className={classes.Label}>Dodaj swój posiłek do bazy</div>
                    <div className={classes.Buttons} onClick={this.sendMealToDatabase}>
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
                            <AddMealForm/>
                        </div>
                    </div>


                </div>
            </div>);
    }

    private sendMealToDatabase = (e: any) => {
        // try {
        //     const data = postData("http://localhost:8080/api/v1/meal", this.props.mealToSend);
        //     console.log(JSON.stringify(data));
        // } catch (error) {
        //     console.error(error);
        // }
        // async function postData(url="", data= {}) {
        //     const response = await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     return await response.json();
        // }

        fetch("http://localhost:8080/api/v1/meal",{method: "POST",headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.props.mealToSend)})
            .then(response => response.json())
            .then((json: any) => {
                console.log(json);
            });
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        mealToSend: store.addMealToDatabaseReducer.toSerialize
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
