import React from 'react';
import NamesPlease from './namesplease';
import listOfNames from './NamesList/listOfNames';


function App(props){
    return (
        <div>
            <h1 className="heading">List of Names and Profile</h1>
            <NamesPlease
            name={listOfNames[0].name}
            img={listOfNames[0].imgURL}
            tel={listOfNames[0].phone}
            email={listOfNames[0].email}
            />
             <NamesPlease
            name={listOfNames[1].name}
            img={listOfNames[1].imgURL}
            tel={listOfNames[1].phone}
            email={listOfNames[1].email}
            /> <NamesPlease
            name={listOfNames[2].name}
            img={listOfNames[2].imgURL}
            tel={listOfNames[2].phone}
            email={listOfNames[2].email}
            /> <NamesPlease
            name={listOfNames[3].name}
            img={listOfNames[3].imgURL}
            tel={listOfNames[3].phone}
            email={listOfNames[3].email}
            /> <NamesPlease
            name={listOfNames[4].name}
            img={listOfNames[4].imgURL}
            tel={listOfNames[4].phone}
            email={listOfNames[4].email}
            />
        </div>
    );      
}

export default App;