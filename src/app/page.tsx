import { appListV1 } from "./api/appList/v1";
import AppTray from "./components/AppTray";

export default async function Home() {
  const pathName = "Discover"
  const {appTrays, title} = await appListV1.getPageData(pathName, 9)

  return (
    <div className="py-6">
      <h1>{title}</h1>
      <div className="flex flex-col divide-y flex-1">
        {appTrays.map(({apps, title}) => (
          <AppTray apps={apps} title={title} key={title} />
        ))}
      </div>
    </div>
  );
}
