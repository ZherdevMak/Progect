import React from 'react';
import SuperInputText from "../Common/c1-SuperInputText/SuperInputText";
import SuperButton from "../Common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../Common/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../Common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../Common/c6-SuperRadio/SuperRadio";

const ComponentTestPage = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>Button</SuperButton>
            <SuperCheckbox>Chekbox</SuperCheckbox>
            <SuperSelect/>
                {/*options={arr}*/}
                {/*value={value}*/}
                {/*onChangeOption={onChangeOption}*/}
            <SuperRadio/>
                {/*name={'radio'}*/}
                {/*options={arr}*/}
                {/*value={value}*/}
                {/*onChangeOption={onChangeOption}*/}
        </div>
    );
};

export default ComponentTestPage;