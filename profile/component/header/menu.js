
import {Tab, Tabs } from '@mui/material'
import { makeStyles } from '@mui/styles';

import { useRouter } from 'next/router'
import { useState } from 'react'


function a11yProps(tabIndex) {
  return {
    id: `horizontal-tab-${tabIndex}`,
    'aria-controls': `horizontal-tabpanel-${tabIndex}`,
    'aria-labelledby': `horizontal-tab-${tabIndex}`
  }
}

// Custom Material UI tabs


// Custom Material UI tab


const useStyles = makeStyles(theme => ({
  firstTab: {
    marginLeft: 0, // No left margin to align menu with container
    
    '& > span': {
      transition: 'all .2s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' },
    },
  },
  tab: {
    fontSize: '1.5rem',
    
    '& > span': {
      transition: 'all .2s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' },
    },
  },
}))

export default function Menu() {
  const classes = useStyles()
  const router = useRouter()
  const { pathname } = router
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  // Ensure proper tag is active on page refresh
  pathname === '/' && activeTabIndex !== 0 && setActiveTabIndex(0)
  pathname === '/work' && activeTabIndex !== 1 && setActiveTabIndex(1)
  pathname === '/blog' && activeTabIndex !== 2 && setActiveTabIndex(2)
  pathname === '/mail' && activeTabIndex !== 3 && setActiveTabIndex(3)

  const handleTabSwitch = (event, selectedTabIndex) => {
    event.preventDefault()
    setActiveTabIndex(selectedTabIndex)
  }

  const LinkTab = (label, index) => {
    const lowerCased = label.toLowerCase()
    return (
      <Tab
        key={index}
        component='a'
        className={index === 0 ? classes.firstTab : classes.tab}
        label={label}
        aria-labelledby='menu'
        onClick={event => {
          event.preventDefault()
          router.push(`/${lowerCased === 'home' ? '' : lowerCased}`)
        }}
        {...a11yProps(index)}
      />
    )
  }

  return (
    <nav id='menu'>
      <Tabs
        orientation='horizontal'
        value={activeTabIndex}
        onChange={handleTabSwitch}
        aria-label='navigation'>
        {['خانه', 'WORK', 'BLOG', 'MAIL'].map((arrayItem, index) =>
          LinkTab(arrayItem, index)
        )}
      </Tabs>
    </nav>
  )
}