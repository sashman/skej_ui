import React from "react";
import moment from "moment";
// @material-ui/core
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import BigCalendar from "react-big-calendar";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";

// @material-ui/icons
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const localizer = BigCalendar.momentLocalizer(moment);

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <BigCalendar
              localizer={localizer}
              events={[
                {
                  title: "Stuff",
                  start: new Date(),
                  end: new Date()
                }
              ]}
              startAccessor="start"
              endAccessor="end"
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
