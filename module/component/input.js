import React, { useState } from 'react';
import { Text, TextInput, Button, View, Alert } from 'react-native';

const PizzaTranslator = (props) => {

  const [text, setText] = useState("");
  let info = text;
  const { defaultText, _onPress } = props;
  let  _onCall = () => {
    _onPress(text);
    console.log(text);
  }
  //Alert.alert(defaultText);

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="在这里输入内容!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      <Button
        title="子组件调用父组件方法"
        onPress={_onCall}
      ></Button>
    </View>
  );
}

export default PizzaTranslator;