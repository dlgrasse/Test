// TYPESCRIPT: i couldn't figure out how to create a standard functional component, even with minimal content, so TypeScript it is
import { createElement, useState, FC } from "react"

const App : FC = () => {
    // TYPESCRIPT: use this generic form so the call to #setListData's arguments below will be correctly typed
    const [ listData, setListData ] = useState<any[]>([]);

    function onButtonClick () {
        const respData = ['Hello', 'There'];
        const dataList = respData.map(_datum => (<li key={_datum}>{_datum}</li>));
        
        setListData(dataList);
    };

    return (<div>
                <span><h2>List o Items</h2> <button type='button' onClick={onButtonClick}>Click Me!</button></span>
                <ul>{listData}</ul>
            </div>
           );
};

export default App
