import React from 'react'
import { Link } from 'react-router-dom'

const Header = (): React.ReactElement => {
  return (
    <div>
      <Link to="/countries">Countries page</Link>
    </div>
  )
}

export default Header
