import { Button, message, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import requestApi from '../../Utils/FetchApi'
import SearchBox from '../Component/SearchBox'

const Home = (props) => {
    const history = useHistory()
    const [title, setTitle] = useState()
    const [key, setKey] = useState(false)
    const [dataList, setData] = useState([])
    const [loading, setLoad] = useState()
    const [pages, setPage] = useState(1);
    const [noData, setNoData] = useState(false);

    window.onscroll = () => {
        if (document.body.scrollHeight === document.documentElement.scrollTop + window.innerHeight) {
            if(!noData) {
                const newPage = pages + 1;
                setPage(newPage)
                getApi(newPage);
          }
        }
      }

    useEffect(()=> {
        apiHandler()
    })
    
    function apiHandler () {
        if (key === false) {
            if (title === undefined) {
                history.push('/')
                props.setList([])
                setKey(true)
            }
        }
    }

    const changeHandler = (e) => {
        setTitle(e.title)
    }

    const getApi = async (param) => {
        try {
            setLoad(true)
            console.log("page berapa 3", param)
            const res = await requestApi(title, `http://www.omdbapi.com/?apikey=faf7e5bb`, param)
            const result = res.Search || []
            if (result) {
                const newList = dataList.concat(result);
                if (param > 1) {
                    setTitle(title)
                    setLoad(false)
                    setData(newList)
                    props.setList(newList)
                } else {
                    setTitle(title)
                    setLoad(false)
                    setData(result)
                    props.setList(result)
                }
            } else {
                setLoad(false)
                setNoData(true)
            }
        } catch (e) {
            console.error("error when fetch", e)
            message.error("Failed to Get Data, Try Again !")
        }
    }

    return (
        <>
            <Row style={{ backgroundColor: '#262B36' }}>
                <Link style={{ margin: '1%' }} to = {'/'}>
                    <label style={{ fontSize: 20, color: 'white' }}>Movie Station</label>
                </Link>
                <Link style={{ marginLeft: 'auto', marginTop: '1%', marginBottom: '1%'}} to = {'/list'}>
                    <Button
                        type="primary"
                        onClick={()=>{
                            setData([])
                            setPage(1)
                            getApi(1)
                        }}
                        loading={loading}
                        disabled={!title}
                    >
                        Search
                    </Button>
                </Link>
                <Row style={{ backgroundColor: 'red', margin: '1%' }}>
                    <SearchBox onChange={e => changeHandler(e)} data={title}/>
                </Row>
            </Row>
        </>
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

export default connect (mapStateToProps, mapDispatchToProps) (Home)
