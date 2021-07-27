// Code your solution here
//findMatching 
  //takes in an array of drivers' names and a string as arguments
    //returns the matching list of drivers
    //should be case insensitive

    function findMatching (arrayOfNames, string) {
        const driverNames = arrayOfNames.filter(element => {
            return element.toUpperCase() === string.toUpperCase()
        })
        return driverNames
    }

//fuzzyMatch
  //takes an array of drivers' names and a string
    //returns all drivers whose names begin with the the provided letters
    function fuzzyMatch (arrayOfNames, string) {
        const fuzzyNames = arrayOfNames.filter(element => {
            return element.startsWith(string)
        })
        return fuzzyNames;
    }

//matchName
  //takes and array of driver objects and a string
    //each driver object has to properties
      //name
      //hometown
  //returns each element whose name property matches the provided string
  function matchName(arrayOfDriverObjs, string) {
      const driverMatches = arrayOfDriverObjs.filter(element => {
          return element.name === string
      })
      return driverMatches;
  }