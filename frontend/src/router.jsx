import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATHS } from './constants/paths.js'
import { Home, AddHemonucleo, ListAllHemonucleos } from './pages/index.js'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ADD} element={<AddHemonucleo />} exact />
        <Route path={PATHS.LIST_ALL} element={<ListAllHemonucleos />} exact />
        <Route path={PATHS.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
