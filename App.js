import React from 'react';
    import { View, Text } from 'react-native';
    import 'tailwindcss/tailwind.css';

    const App = () => {
      return (
        <View className="flex-1 items-center justify-center bg-blue-500">
          <Text className="text-white text-2xl">Hello, Tailwind CSS!</Text>
        </View>
      );
    };

    export default App;
