import React from 'react'
import Navbar from "../js/components/navbar";

export default function BaseLayout({children, ...props}){

  return (
    <>
      <Navbar {...props}/>
      {children}
    </>
  )
}

function getDisplayName(Component) {
  return Component.name || Component.name || 'Component'
}

export const withBaseLayout = (Component, config) => props => {
  const viewName = getDisplayName(Component)
  return (
    <>
      <Navbar {...config} view={viewName}/>
      <Component {...props} />
    </>
  )
}
