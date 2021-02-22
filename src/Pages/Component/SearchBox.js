import { Input } from 'antd'
import React from 'react'

function SearchBox ({onChange=()=>{}, data=''})  {

    function changeHandler(e) {
        onChange({ title: e.target.value })
    }

    return (
            <Input 
                value={data}
                onChange={changeHandler} />
    )
}

export default SearchBox
