
import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div class="row my-5">
            <div class="col">
                <div class="card-group">

                    <Card title='title-one' description='this is description one' />
                    <Card title='title-two' description='this is description two' />
                    <Card title='title-three' description='this is description three' />
                </div>
            </div>
        </div>
    )
}

export default Cards