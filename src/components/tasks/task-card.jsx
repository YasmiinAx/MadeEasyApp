import { StyleSheet, Text, View } from "react-native";
import { AdvancedCheckbox } from "react-native-advanced-checkbox";

export default function TaskCardComp({ taskObj, toggleCompleted }) {
    const { name, priority, completed } = taskObj;
    
    {/* Determine The Task Color Based On Priority */}
    let priorityColor;
    if (priority.toLowerCase() === 'high') 
        priorityColor = 'red';
    else if (priority.toLowerCase() === 'medium') 
        priorityColor = 'orange';
    else priorityColor = '#2FE942';
    
    return (
        <View style={taskStyles.container}>
            <View style={taskStyles.row}>
                {/* Checkbox And Task Name */}
                <AdvancedCheckbox
                    value={completed}
                    onValueChange={toggleCompleted}
                    size={26}
                    checkedColor="#E891D6"
                    uncheckedColor="#3D2938"
                />
                <Text style={taskStyles.name}>{name}</Text>
            </View>
            
            {/* Priority Label */}
            <Text style={[
                taskStyles.priorityCard,
                { color: priorityColor, borderColor: priorityColor }
            ]}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
            </Text>
        </View>
    );
}

const taskStyles = StyleSheet.create({
    container: {
        backgroundColor: '#2D1F2B',
        borderWidth: 1,
        borderColor: '#3D2938',
        borderRadius: 20,
        padding: 2,
        marginVertical: 10,
    },
    name: {
        fontSize: 18,
        marginLeft: 15,
        color: 'white',
    },
    priorityCard: {
        borderWidth: 1,
        backgroundColor: '#3D2938',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 8,
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginLeft: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
    }
});
