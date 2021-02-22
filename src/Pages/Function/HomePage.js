import { message, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import requestApi from '../../Utils/FetchApi'
import HomePage from '../Component/HomePage'

const HomePage2 = (props) => {
    const [dataList, setTitle] = useState([])
    const [loading, setLoad] = useState(true)
    const [pages, setPage] = useState(1);
    const [noData, setNoData] = useState(false);

    window.onscroll = () => {
        if (document.body.scrollHeight === document.documentElement.scrollTop + window.innerHeight) {
          if(!noData) {
            getApi(pages);
          }
        }
      }
 
    useEffect(()=> {
        apiHandler()
    })
    
    function apiHandler () {
        if (loading === true) {
            getApi()
        } 
    }

    const getApi = async (page) => {
        try {
            setLoad(false)
            page = pages || 1
            const res = await requestApi('superman', 'http://www.omdbapi.com/?apikey=faf7e5bb', page)
            const result = res.Search || []
            if (result) {
                const newPage = page + 1;
                const newList = dataList.concat(res.Search);
                console.log("newList", {result, newList})
                props.setList(newList)
                setTitle(newList)
                setPage(newPage)
            } else {
                setLoad(false)
                setNoData(true)
            }
        } catch (e) {
            console.warn("error when fetch", e)
            message.error('Failed to Load Data, Try Again !')
        }
    }

    return (
        <div style={{ backgroundColor: 'black' }}>
            {dataList === undefined ? <Skeleton /> : (
                <HomePage dataList={dataList} />
            )}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
      list: state.list
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      setList: data => dispatch({type:'SET_LIST', payload: data})
    }
  }

export default connect (mapStateToProps, mapDispatchToProps) (HomePage2)
