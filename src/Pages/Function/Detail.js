import { Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import requestApi from '../../Utils/FetchApi'
import Details from '../Component/Details'

const Detail = (props) => {
    const [res, setRes] = useState()
    const [load, setLoad] = useState(true)
    const { id } = props.match.params

    useEffect(()=> {
      apiHandler()
  })
  
  function apiHandler () {
      if (load === true) {
          getDetail()
      } 
  }

    async function getDetail() {
        const result = await requestApi(id, 'http://www.omdbapi.com/?apikey=faf7e5bb&i=', null)
        if (result) {
            setLoad(false)
            setRes(result)
            props.setList([])
        } else {
            setLoad(false)
        }
        console.log("result detail", result, load)
    }

      return (
        <div style={{ backgroundColor: 'black', top:'0', bottom:'0', left:'0', right:'0', position: 'absolute' }}>
            {load === true ? <Skeleton /> : (
                <Details data={res}/>
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

export default connect (mapStateToProps, mapDispatchToProps) (Detail)
