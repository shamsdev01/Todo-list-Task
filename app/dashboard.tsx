import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import TopLeftDesign from '@/components/Design';
import { useState } from 'react';

const initialTasks = [
  { label: 'Learning Programming by 12PM', checked: true },
  { label: 'Learn how to cook by 1PM', checked: false },
  { label: 'Learn how to play at 2PM', checked: false },
  { label: 'Have lunch at 4PM', checked: false },
  { label: 'Going to travel 6PM', checked: false },
];

export default function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = idx => {
    setTasks(tasks =>
      tasks.map((task, i) =>
        i === idx ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <TopLeftDesign />
      <View style={styles.header}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.welcome}>Welcome Jeegar goyani</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.greeting}>Good Afternoon</Text>
        <View style={styles.clockWrapper}>
          <Image
            source={require('../assets/images/clock.png')}
            style={styles.clockImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.taskListLabel}>Task list</Text>
        <View style={styles.taskCard}>
          <View style={styles.taskCardHeader}>
            <Text style={styles.taskCardTitle}>Daily Task</Text>
            <TouchableOpacity>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.taskList}>
            {tasks.map((task, idx) => (
              <TouchableOpacity
                key={task.label}
                style={styles.taskItem}
                activeOpacity={0.7}
                onPress={() => toggleTask(idx)}
              >
                <View
                  style={[
                    styles.checkbox,
                    task.checked && {
                      borderColor: '#4EC5CE',
                      backgroundColor: '#E6FAFB',
                    },
                  ]}
                >
                  {task.checked && <View style={styles.checkboxInner} />}
                </View>
                <Text
                  style={[
                    styles.taskText,
                    task.checked && {
                      color: '#4EC5CE',
                      fontFamily: 'Poppins-Bold',
                    },
                  ]}
                >
                  {task.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFFE',
    position: 'relative',
  },
  header: {
    backgroundColor: '#4EC5CE',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 24,
    marginTop: 36,
    zIndex: 2,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
    marginTop: 8,
  },
  welcome: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  bodySection: {
    flex: 1,
    backgroundColor: '#F8FFFE',
    marginTop: -20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 0,
    zIndex: 1,
  },
  greeting: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Bold',
    textAlign: 'right',
    marginRight: 32,
    marginBottom: 8,
  },
  clockWrapper: {
    alignItems: 'center',
    marginBottom: 8,
  },
  clockImage: {
    width: 100,
    height: 100,
  },
  taskListLabel: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Poppins-Bold',
    marginLeft: 32,
    marginTop: 16,
    marginBottom: 8,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  taskCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskCardTitle: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins-Bold',
  },
  addIcon: {
    fontSize: 24,
    color: '#4EC5CE',
    fontFamily: 'Poppins-Bold',
    marginRight: 2,
  },
  taskList: {
    maxHeight: 180,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#BDBDBD',
    marginRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: '#4EC5CE',
  },
  taskText: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
});