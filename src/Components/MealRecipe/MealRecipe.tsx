import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './MealRecipe.module.css'
import {ProductsDto, stepsDto} from "../../ServerConnection/DTOs/MealRecipeDto";

interface OwnProps {
    mealRecipe: any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class MealRecipe extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.mealRecipe.title}</h2>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>rodzaj dania: {this.typeOfMeal()} </p>
                        <p>czas przygotowania: {this.props.mealRecipe.receiptDTO.prepareTime}min</p>
                        <p>ilość kcal: {this.props.mealRecipe.amountCalories}kcal</p>
                        <p>autor przepisu: {this.props.mealRecipe.authorReceipt}</p>
                    </div>
                    <div className={styles.Products}>
                        <h4 className={styles.MealRecipe}>Składniki</h4>
                        <ul>
                            {
                                this.props.mealRecipe.products.map((product: ProductsDto) =>
                                    <li>{product.name}, {product.specialUnit}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.Preparation}>
                    <h4>Sposób wykonania</h4>
                    <ol>
                        {
                            this.props.mealRecipe.receiptDTO.steps.map((step: stepsDto) =>
                                <li>{step.header}</li>)
                        }
                    </ol>
                </div>
            </React.Fragment>
        )
    }

    private typeOfMeal = () => {
        if (this.props.mealRecipe.typeMeal[0].mealTime === "BREAKFAST") {
            return "śniadanko"
        } else if (this.props.mealRecipe.typeMeal[0].mealTime === "DINNER") {
            return "obiad"
        } else if (this.props.mealRecipe.typeMeal[0].mealTime === "LUNCH") {
            return "drugie śniadanie"
        } else if (this.props.mealRecipe.typeMeal[0].mealTime === "SNACK") {
            return "podwieczorek"
        } else if (this.props.mealRecipe.typeMeal[0].mealTime === "SUPPER") {
            return "kolacja"
        }
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MealRecipe);
