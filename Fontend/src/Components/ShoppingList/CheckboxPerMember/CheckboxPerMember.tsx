import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from "../ShoppingList.module.css"
import {AppStore} from "../../../Redux/store";
import WeekCheckbox from "./WeekCheckbox/WeekCheckbox"
interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CheckboxPerMember extends Component<Props> {

    render() {

        return (
            <div className={styles.Checkbox}>
                {this.props.memberList.map((userName: string) =>
                    <React.Fragment>
                        <div className={styles.MemberList}>
                            <p>wygeneruj listę zakupów dla:</p>
                            <div>
                                <input value={userName} type="checkbox" onClick={this.selectedMember}/>
                                <label>{userName}</label>
                                <div>
                                    <WeekCheckbox/>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                )}
            </div>
        )
    }

    private selectedMember = (e: any) => {
        let selectedMember = e.target.parentElement.innerHTML.split("<label>")[1].split("</label>")[0];
        let currentMemberIndex = this.props.Meal.findIndex(m => m.name == selectedMember);
        console.log(currentMemberIndex)
    };
}


const mapStateToProps = (store: AppStore) => {
    if (store.weekScheduleReducer.members !== undefined) {
        return {
            Meal: store.weekScheduleReducer.members,
            memberList: store.weekScheduleReducer.members.map(member => member.name),
        }
    }
};

const mapDispatchToProps = () => {

};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxPerMember);
