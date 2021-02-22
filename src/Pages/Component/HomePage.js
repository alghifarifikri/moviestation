import { Carousel, Image, Skeleton } from 'antd'
import React from 'react'
import img1 from '../../Image/1.jpeg'
import img2 from '../../Image/2.jpg'
import img3 from '../../Image/3.jpg'
import img4 from '../../Image/4.jpeg'
import List from './List'

function HomePage ({dataList={}}) {

    return (
        <div style={{ backgroundColor: 'black'}} >
            <Carousel autoplay>
                <div>
                    <Image 
                        src={img1}
                        height={500}   
                    />  
                </div>
                <div>
                    <Image 
                        src={img2}
                        height={500}   
                    />  
                </div>
                <div>
                    <Image 
                        src={img3}
                        height={500}   
                    />  
                </div>
                <div>
                    <Image 
                        src={img4}
                        height={500}   
                    />  
                </div>
            </Carousel>
            {dataList === undefined ? <Skeleton /> : (
                <List data={dataList} />
            )}
        </div>
    )
}

export default HomePage
