"use client"

import { AvailableFilters } from "@/app/api/appList/v1"

type SideBar = {
  availableFilters: AvailableFilters[]
} 

const SideBar = ({availableFilters}: SideBar) => {
  return (
    <nav className="bg-slate-300 p-6">
      <ul className="flex flex-col gap-3">
      {availableFilters.map(({category}) => (
        <li key={category}>
          {category}
        </li>
      ))}
      </ul>
    </nav>
  )
}

export default SideBar;