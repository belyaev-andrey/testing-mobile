import React, {Component} from "react";
import {collection} from "@cuba-platform/react-core";
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from "react-native";
import {PredefinedView} from "@cuba-platform/rest";
import {observer} from "mobx-react";
import {colors} from "../styles/palette";
import {QuestionAndAnswer} from "../cuba/entities/testing_QuestionAndAnswer";
import {Card, ListItem, Button, Icon, CheckBox} from "react-native-elements";

const styles = StyleSheet.create({
    list: {
        marginTop: 16
    },
    item: {
        fontSize: 16,
        color: colors.textPrimary,
        marginTop: 4,
        marginBottom: 4
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 16
    }
});

@observer
export class Example extends Component {
    usersData = collection<QuestionAndAnswer>(QuestionAndAnswer.NAME, {
        view: 'questionAndAnswer-view'
    });

    render() {
        const {status, items} = this.usersData;

        if (status !== "DONE") {
            return <ActivityIndicator color={colors.textPrimary}/>;
        }

        return (
            <>
                <ScrollView style={styles.list} stickyHeaderIndices={[1]}>
                    {<Text style={styles.title}>List of Questions:</Text>}
                    {items.map(item => (
                        <>
                            <Card>
                                <Card.Title>{item.question.text}</Card.Title>
                                <Card.Divider/>
                                <View style={{flex: 3, flexDirection: "row"}}>
                                    <View style={{flex: 2, flexDirection: "column", justifyContent: "center"}}>
                                        <Text>
                                            {item.answer.text}
                                        </Text>
                                    </View>
                                    <CheckBox style={{flex: 1}}
                                              title='Correct?' checked={item.correct}/>
                                </View>
                            </Card>
                        </>
                    ))}
                </ScrollView>
            </>
        );
    }
}