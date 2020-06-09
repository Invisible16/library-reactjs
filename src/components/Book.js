import React from 'react'
import 'antd/dist/antd.css';
import './Book.css'

import { Card, Col,Button } from 'antd';

const { Meta } = Card;
export default function Book(props) {
    const { title, description, coverUrl } = props
    return (
            <Col className="gutter-row" xs={22} md={11}>
                <Card hoverable className='Book'  >
                    <Meta
                        avatar={
                            <img src={coverUrl} />
                        }
                        title={title}
                    description={<div className='description'> <p>{description}</p> <Button>Add </Button> </div> }
                    />
                    
                </Card>
            </Col>

        
    )
}
