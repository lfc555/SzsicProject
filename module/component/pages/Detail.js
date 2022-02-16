/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    useColorScheme,
    View,
    Alert
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import PizzaTranslator from '../input';


const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const Detail: () => Node = ({ route, navigation }) => {
    const isDarkMode = useColorScheme() == 'dark';
    /* 2. Get the param */
    let { itemId, otherParam } = route.params;


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    alertInfo = (msg) => {
        Alert.alert('子组件数据：' + msg);
    }


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => otherParam = "其他参数更新"} title="操作" />
            ),
        });
    }, [navigation]);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <Text>获取参数itemId: {JSON.stringify(itemId)}</Text>
                <Text>获取参数otherParam: {JSON.stringify(otherParam)}</Text>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section>
                        <Button
                            title="转到主页面"
                            onPress={
                                () => navigation.navigate('Home')
                            }
                        />
                    </Section>
                    <Section>
                        <Button
                            title="转到详细页面"
                            onPress={() => navigation.push('Details', {
                                itemId: Math.floor(Math.random() * 100)
                            })}
                        />
                    </Section>
                    <Section>
                        <Button title="返回" onPress={() => navigation.goBack()} />
                    </Section>

                    <Section title="">
                        <Button
                            title="返回初始化页"
                            onPress={() => navigation.popToTop()}
                        />
                    </Section>
                    <Section title="">
                        详细页面：Detail
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Detail;
