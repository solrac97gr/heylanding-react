import React from 'react'
import {BannerTec} from '../components/BannerTec'
import {SearchBar} from '../components/SearchBar'
import {TecniciansCardList} from '../components/TecniciansCardList'


export const Technicans = () => {
    return (
        <div>
            <BannerTec/>
            <SearchBar/>
            <TecniciansCardList/>
        </div>
    )
}
