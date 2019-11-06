import React, {Component, PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from "./ListOfMeals.module.css"
import {closeModal, randomMealChange} from "../../Redux/actions";
import {Dispatch} from "redux";
import {AppStore} from "../../Redux/store";
import {SHOW_DETAIL_URL} from "../../ServerConnection/RestCommunication/fileWithConstants";
import {MealDto} from "../../ServerConnection/DTOs/WeekScheduleDto";

interface OwnProps {
    mealNumber: number
    dayNumber: number
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

interface State {
    currentMealInputValue: string
}

class ListOfMeals extends Component<Props, State> {
    readonly mealInput: RefObject<HTMLInputElement>;

    constructor(Props: any, State: any) {
        super(Props, State);
        this.mealInput = React.createRef();
        this.state = {
            currentMealInputValue: ""
        }
    }

    // prepareMealList() {
    //     return (this.props.randomMealList.map((meal: DayDietDto, i: number) =>
    //         <li>
    //             <button
    //                 className={styles.mealButton}
    //                 onClick={this.clickHandler} value={i}>{meal.title}</button>
    //         </li>))
    // }
    // ;
    changeMealName = (e: any) => {
        let id = e.target.id;
        fetch(SHOW_DETAIL_URL + id)
            .then(response => response.json())
            .then((json: MealDto) => {
                this.props.randomMealChange(json, this.props.dayNumber, this.props.mealNumber);});
        this.mealInput.current!.value = "";
        this.props.closeModal();
    };

    render() {
        return (
            <div className={styles.MealList}>
                <h2>Wybierz posiłek</h2>
                <div className=" bg-light rounded rounded-pill shadow-sm search-box">
                    <div className="input-group">
                        <input type="search" onChange={this.changeCurrentMealInputValue} ref={this.mealInput}
                               placeholder="czego szukasz" aria-describedby="button-addon3"
                               className="form-control bg-none border-0"/>
                    </div>
                    <div className={[styles.SearchResults, "result"].join(" ")}>
                        {this.createListOfMatchingMeals()}
                    </div>
                </div>
                <ul className={styles.mealButtons}>
                {/*{this.prepareMealList()}*/}
                </ul>
            </div>
        )
    }

    private changeCurrentMealInputValue = () => {
        document.querySelector(".result")!.classList.add(styles.show);
        let innerValue = this.mealInput.current!.value;
        this.setState({currentMealInputValue: innerValue});
    };

    private createListOfMatchingMeals = () => {
        const allMeals = this.props.allMeals;
        return allMeals.filter((p: any) => p.name.toLocaleLowerCase().includes(this.state.currentMealInputValue.toLocaleLowerCase())
        ).map((p: any) => <li id={p.id.toString()} onClick={this.changeMealName}
        >{p.name}</li>)
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        allMeals: store.weekScheduleReducer.allMeals
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        randomMealChange: (randomMeal: MealDto, dayNr: number, mealNr: number) => dispatch(randomMealChange(randomMeal, dayNr, mealNr)),
        closeModal: () => dispatch(closeModal()),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfMeals);
