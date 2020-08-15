import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import I18n from '../../i18n';
import { changeLanguage } from '../../redux/language/LanguageAction';

const SettingScreen = (props) => {
    const [language, setLanguage] = useState(props.languageDetails);

    const change = (value) => {
        setLanguage(value);
        props.changeLanguage(value)
    }

    return (
        <View style={styles.container}>
            <Text>{I18n.t('setting.settingScreen')}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>{I18n.t('setting.language')} :</Text>
                <Picker
                    selectedValue={language}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(value, index) => change(value)}
                >
                    <Picker.Item label={I18n.t('setting.english')} value="en" />
                    <Picker.Item label={I18n.t('setting.german')} value="de" />
                    <Picker.Item label={I18n.t('setting.spanish')} value="es" />
                    <Picker.Item label={I18n.t('setting.russian')} value="ru" />
                </Picker>
            </View>
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

const mapDispatchToProps = (dispatch) => ({
    changeLanguage: item => dispatch(changeLanguage(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);