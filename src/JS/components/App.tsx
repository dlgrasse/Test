import { createElement, useState, useEffect, FC } from "react"

const App : FC = () => {
    // TYPESCRIPT: use this generic form so the call to #setListData's arguments below will be correctly typed
    const [ listData, setListData ] = useState<any[]>([]);

    useEffect(() => {
        
    }, [listData]);

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
