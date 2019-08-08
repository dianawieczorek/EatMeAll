import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./TableHeader.module.css"

interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TableHeader extends PureComponent<Props> {
  render() {
    return (
        <div className={styles.TableHeader}>
            <div className={styles.Label}>Plan posiłków</div>
            <div className={styles.Buttons}>
                <Button>
                    Wygeneruj posiłki
                </Button>
                <Button>
                    Obecny tydzień
                </Button>
                <Button>
                    Kalendarz
                </Button>
            </div>
        </div>
    );
  }
}


const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
