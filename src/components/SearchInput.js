import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
export default function SearchInput() {
    return (
        <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    )
}
