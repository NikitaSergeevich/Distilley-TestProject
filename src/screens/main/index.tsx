import React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux'
import {
  View,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { updateData, } from '../../redux/users';
import { toggleTheme, } from '../../redux/theme';

import { User } from '../../redux/users/types'
import { AppState } from '../../redux';
import { colors } from '../../theme';
import styles from './styles';

type OwnProps = {}

interface ReduxStateProps {
  users: User[],
  isLoading: boolean,
  theme: string,
}

interface ReduxDispatchProps {
  onUpdateData: () => void,
  onToggleTheme: () => void,
}

type Props = ReduxStateProps & ReduxDispatchProps & OwnProps

// + 1. be able run the project :) (ios simulator)
// + 2. fix bugs
// + 3. refactor and optimize the code as much as possible
// + 4. translate to TypeScript !
// + 5. improve project structure for future code updates (new screens etc)
// 6. [Optional] add script to package json for running prettifier, linters and tsc checks
// 7. [Optional] configure redux logs

class Screen extends React.Component<Props, {}> {

  componentDidMount() {
    this.handleRefresh();
  }

  onToggle = () => {
    this.props.onToggleTheme();
  };

  handleRefresh = async () => this.props.onUpdateData();

  renderData = () => {
    const { users, theme } = this.props;
    const themeStyle = {
      backgroundColor: theme === 'light' ? colors.white : colors.dark,
    };
    //TODO ADD SELECTORS
    let cars = users
      .map(x => x.car.name)
      .filter((x, i, arr) => arr.indexOf(x) === i);
    let amounts = cars.map(car =>
      users.reduce(
        (result, p) => (p.car.name === car ? result + 1 : result),
        0,
      ),
    );
    return cars.map((car, i) => {
      return (
        <View key={car + i} style={[styles.entryRow, themeStyle]}>
          <Text style={styles.brandText}>Brand: {car}</Text>
          <Text style={styles.amountText}>Amount: {amounts[i]}</Text>
        </View>
      );
    });
  };

  render() {
    const { isLoading } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              onRefresh={this.handleRefresh}
              refreshing={isLoading}
            />
          }>
          <TouchableOpacity onPress={this.onToggle}>
            <Text style={styles.toggleText}>Toogle theme</Text>
          </TouchableOpacity>
          {this.renderData()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): ReduxDispatchProps {
  return bindActionCreators(
    {
      onUpdateData: updateData,
      onToggleTheme: toggleTheme
    },
    dispatch,
  );
}

function mapStateToProps(state: AppState): ReduxStateProps {
  //TODO ADD SELECTORS
  return {
    users: state.users.users,
    isLoading: state.users.isDataLoading,
    theme: state.theme.color,
  }
}

export default connect<ReduxStateProps, ReduxDispatchProps, OwnProps>
  (mapStateToProps, mapDispatchToProps)(Screen);