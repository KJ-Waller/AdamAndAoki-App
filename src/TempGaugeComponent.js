import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-material-ui';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

class GaugeComponent extends Component {

    render() {
        const {value, openWeather, key} = this.props;

        return (
          <View style={styles.view} onPress={() => openWeather()}>
            <Text>{value}</Text>
            <AnimatedGaugeProgress
              size={200}
              width={15}
              fill={(value/40)*100}
              rotation={90}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
              stroke={[2, 2]} //For a equaly dashed line
              strokeCap="circle" />
          </View>

        )
    };
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GaugeComponent;