import React from 'react'
import { StyledSearch } from '../global.styled'
import {Ram} from './Ram'
import {Location} from './Location'
import {Hdd} from './Hdd'

export const Search = () => {

  const searchParams = () => {
    console.log('search params')
  }

  return (
    <StyledSearch>
        <div className="container">
          <div>
            <h3>Storage</h3>
            <p>RANGE SLIDER</p>
          </div>
          <div>
            <h3>RAM</h3>
            <Ram />
          </div>
          <div>
            <h3>HDD</h3>
            <Hdd/>
          </div>
          <div>
            <h3>Location</h3>
            <Location />
          </div>
        </div>
        <div className="container-search">
          <div>
            <button className="button" onClick={searchParams}>Search</button>
          </div>
        </div>
      
    </StyledSearch>
  )
}
