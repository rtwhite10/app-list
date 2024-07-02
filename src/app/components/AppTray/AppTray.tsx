"use client"

import { AppData } from "@/app/api/appList/v1";
import AppCard from "./AppCard";

type AppTrayProps = {
  apps: AppData[];
  title: string;
}


const AppTray = ({ apps, title }: AppTrayProps) => {
  return (
    <div className="flex flex-col flex-1 gap-1 py-3">
      <div>{title}</div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
        {apps.map((app) => (
          <AppCard app={app} key={app.id} />
        ))}
      </div>
    </div>
  )
}

export default AppTray;