const foodObjects = [ 
    "pizza",
    "sushi",
    "french fries",
    "apple",
    "orange", 
    "sandwich",
    "carrot",
    "cucumbers",
    "berries"
  ];
  
  // Retrieve elements 5 to 8
  const elements5to8 = foodObjects.slice(4, 8); // 4 is the index of "orange", and 8 is one past the last index we want (index 7, which is "berries")
  
  console.log(elements5to8);
  