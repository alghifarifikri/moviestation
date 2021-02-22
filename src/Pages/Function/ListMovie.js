import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux'
import List from '../Component/List'

const ListMovie = (props) => {
    const [dataList, setList] = useState()
    const propsList = props.list

    useMemo(() => propsList ? setList(propsList) : setList([]), [propsList])

    return (
        <List data={dataList} />
    )
}

const mapStateToProps = state =>{
    return{
      list: state.list.data
    }
  }

export default connect (mapStateToProps) (ListMovie)
