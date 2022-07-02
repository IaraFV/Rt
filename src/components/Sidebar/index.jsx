import React from 'react'
import { Container, Content } from './styles'

import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import { Link, Routes } from 'react-router-dom'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem  Icon={FaHome} Text="Home" />
        <SidebarItem link='/Pessoas'Icon={FaUserAlt} Text="Pessoas" />
        <SidebarItem Icon={FaChartBar} Text="Projetos" />
        <SidebarItem Icon={FaIdCardAlt} Text="Equipes" />
        <SidebarItem Icon={FaRegFileAlt} Text="Task" />
        <SidebarItem Icon={FaRegSun} Text="Sobre" />
      </Content>
    </Container>
  )
}


export default Sidebar