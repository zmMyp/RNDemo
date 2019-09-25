import React, { Component } from 'react';

import { StyleSheet, Text, Button, View, Modal, TouchableHighlight } from 'react-native';

import { Scrollpicker } from './beeshell/Scrollpicker';
//import { Scrollpicker } from 'beeshell';

export default class Demo18 extends React.Component {


    render() {
        return (<View>
            <Button
                size='sm'
                style={{ marginTop: 12 }}
                type='default'
                onPress={() => {
                    this.sp.onScroll(0, 70 * 1)

                }}
                title="测试对话框">

            </Button>

            <View style={{ paddingVertical: 15 }}>

                <Scrollpicker


                    ref={(v) => this.sp = v}
                    style={{ paddingHorizontal: 70 }}
                    list={[
                        [{ label: 2010 }, { label: 2011 }, { label: 2012 }, { label: 2013 }]

                    ]}
                    proportion={[1, 1]}
                    renderItem={(item, index) => {
                        return (
                            <View
                                style={{
                                    height: 70,
                                    flexDirection: 'row',
                                    paddingVertical: 10
                                }}>

                                <Text
                                    style={{
                                        color: "#66ff99",
                                        fontSize: 40,
                                        marginLeft: 10
                                    }}>
                                    {item.label}
                                </Text>
                            </View>
                        )
                    }}
                    onChange={(columnIndex, rowIndex) => {
                        console.log(columnIndex, rowIndex)
                    }}
                />

            </View>


        </View>)
    }
}