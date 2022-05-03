const AppReducer = (model, action) => {
    switch (action.type) {
      case 'VERIFY_USER':
        return {
            ...model,  
            userdetails: [action.payload]
        }

        case 'ADD_ROW':
        return {
            ...model,  
            workrowcount: [...model.workrowcount,action.payload]
        }

        case 'REMOVE_ROW':
            const result = model.workrowcount.filter((item)=>{
                    if(item.uniqueid !== action.payload)
                    {
                       return true;
                    }   
                    else
                    {
                        return false;
                    }
                   })
        return {
            ...model,  
            workrowcount: result
        }


        case 'EMPLOYEEWORKUPDATE':
        let exist = model?.workrowcount?.find(element =>  element.uniqueid === action.payload.uniqueid)
        if(exist){
           Object.assign(exist,action.payload)
        }   
       
        return {...model}
              
        default:
        return model;
  
        
    }
  }

  export default AppReducer;