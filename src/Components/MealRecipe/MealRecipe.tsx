import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './MealRecipe.module.css'
import {MealRecipeDto, ProductsDto, stepsDto} from "../../ServerConnection/DTOs/MealRecipeDto";

interface OwnProps {
    mealRecipe: MealRecipeDto
    typeOfMeal: any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class MealRecipe extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.mealRecipe.title}</h2>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>rodzaj dania: {this.props.typeOfMeal} </p>
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
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MealRecipe);
