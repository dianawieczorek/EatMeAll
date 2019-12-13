import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './MealRecipe.module.css'
import {MealRecipeDto, ProductsDto, stepsDto} from "../../../ServerConnection/DTOs/MealRecipeDto";
import {MealDto, PartDTO} from "../../../ServerConnection/DTOs/WeekScheduleDto";

interface OwnProps {
    mealRecipe: MealDto
    typeOfMeal: any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class MealRecipe extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.mealRecipe.name}</h2>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>rodzaj dania: {this.props.typeOfMeal} </p>
                        <p>czas przygotowania:[tu będzie przekazywany czas] min</p>
                        <p>ilość kcal: {this.props.mealRecipe.calorific.toFixed(1)}kcal</p>
                        <div className={styles.Makro} >
                            <p>węglowodany: {this.props.mealRecipe.carbohydrates.toFixed(1)}g</p>
                            <p>tłuszcze: {this.props.mealRecipe.fat.toFixed(1)}g</p>
                            <p>białka: {this.props.mealRecipe.protein.toFixed(1)}g</p>
                        </div>
                        <p>autor przepisu: {this.props.mealRecipe.author}</p>
                    </div>
                    <div className={styles.Products}>
                        <h4 className={styles.MealRecipe}>Składniki</h4>
                        <ul>
                            {
                                this.props.mealRecipe.parts.map((product: PartDTO) =>
                                    <li>{product.name}, {product.amount} ({product.specialAmount})</li>)
                                    // <li>{product.name}, {product.amount}{product.unit} ({product.specialUnit})</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.Preparation}>
                    <h4>Sposób wykonania</h4>
                    <ol>
                        {
                            this.props.mealRecipe.steps.map((step: string) =>
                                <li>{step}</li>)
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
