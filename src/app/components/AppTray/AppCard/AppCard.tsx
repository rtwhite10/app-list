"use client"

import { AppData } from "@/app/api/appList/v1"
import Image from "next/image"
import cx from "classnames"

type AppCardProps = {
  app: AppData
}

const AppCard = ({app: {imageUrl, name, tagline, metadata}}: AppCardProps) => {
  return (
    <div className={cx("flex gap-4 py-3", {
      "flex-col-reverse": metadata?.stack
    })}>
      <div style={{minWidth: metadata.imageSize}}>
        <Image src={imageUrl} alt={name} height={metadata.imageSize} width={metadata.imageSize}/>
      </div>
      <div className={cx("flex flex-col gap-2")}>
        <div>
          {name}
        </div>
        <div>
          {tagline}
        </div>
      </div>
    </div>
  )
}

export default AppCard