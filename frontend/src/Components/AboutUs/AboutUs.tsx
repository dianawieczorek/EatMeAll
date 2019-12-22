import React, {PureComponent} from 'react';
import styles from "./AboutUs.module.css";

class AboutUs extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className={styles.PersonInfo}>Frontend - Diana <a href="https://www.linkedin.com/in/dianawieczorek/" target="_blank">linkedin profile</a></div>
                <div className={styles.PersonInfo}>Backend - Przemek <a href="https://www.linkedin.com/in/przemys%C5%82aw-wieczorek-79815699//" target="_blank">linkedin profile</a></div>
            </React.Fragment>
        )
    }
}

export default AboutUs;