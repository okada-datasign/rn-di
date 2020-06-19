import React, { FC, useContext, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ApplicationContext } from '../ApplicationContext';
import { User } from '../application/domain/models';

export const UserListScreen: FC = (props) => {
  const app = useContext(ApplicationContext);
  const styles = getStyles();
  const [userName, setUserName] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const users = app.usrUsecases().FindAll();
    setUsers(users);
  }, []);

  const addUser = () => {
    if (!userName) return;
    app.usrUsecases().Create(userName);
    const users = app.usrUsecases().FindAll();
    setUsers(users);
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Text>Name:</Text>
          <TextInput style={styles.input} onChangeText={value => setUserName(value)} />
          <TouchableOpacity style={styles.addButton} onPress={addUser}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList<User>
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View style={styles.userContainer}>
              <Text style={styles.userText}>{item.name}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const getStyles = () => StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
  addButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',

  },
  addButtonText: {
  },
  userContainer: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
  },
  userText: {
    fontSize: 16,
  },
});
