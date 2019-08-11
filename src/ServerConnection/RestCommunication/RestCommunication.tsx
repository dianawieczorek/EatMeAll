import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from "redux";

interface OwnProps {
}

interface State {
    webSocket: WebSocket
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class RestCommunication extends PureComponent<Props, State> {
    render() {
        return (
            <React.Fragment/>
        );
    }

     componentDidMount() {
        console.log("dupa")
        //     fetch("jsonMocks/wholeweek.json")
        // //         .then(response => response.json())
        // //         .then((json: WeekScheduleDto[]) => {
        // //             console.log(json[0]);
        // //             // this.props.setCurrentWeekSchedule(json[0]);
        // //         })
        // }
    }
}


const mapStateToProps = (state: any) => {
    return {};
};


const mapDispatchToProps = (dispatch: Dispatch) => ({
    // ta akcja ma ustawiać cały tydzień w appStore jako currentWeekSchedule
    // setCurrentWeekSchedule: (aWeekSchedule: WeekScheduleDto) => dispatch(setCurrentWeekSchedule(aWeekSchedule))
    // setMyBuildings: (aMyBuildings: Array<BuildingDto>) => dispatch(setMyBuildings(aMyBuildings)),
    // setResources: (aResources: {minerals: number, gas: number}) => dispatch(setResources(aResources))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestCommunication);
