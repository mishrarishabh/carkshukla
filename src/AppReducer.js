const AppReducer = (model, action) => {
    switch (action.type) {
      case 'VERIFY_USER':
        return {
            ...model,  
            userdetails: [action.payload]
        }

        case 'ADD_ROW':
            console.log("ytjttyjytjytjt")
        return {
            ...model,  
            workrowcount: [...model.workrowcount,action.payload]
        }
              
        default:
        return model;
  
        
    }
  }

  export default AppReducer;