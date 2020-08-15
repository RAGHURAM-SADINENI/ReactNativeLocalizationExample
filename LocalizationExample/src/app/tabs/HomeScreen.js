import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import I18n from '../../i18n';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>{I18n.t('homeScreen')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})

const mapStateToProps = (state) => ({
    languageDetails: state.language
})

export default connect(mapStateToProps)(HomeScreen);