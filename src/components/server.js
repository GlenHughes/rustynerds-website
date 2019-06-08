import React, { useState } from "react";
import ReactToolTip from "react-tooltip"

import Image from "../components/image"

function Server ({ server }) {
  const { id, name, banner, ip, port, plugins } = server
  const serverPlugins = getPlugins(plugins)
  // console.log(name, ip, port, plugins)
  return (
    <div className="lg:w-2/3 sm:w-full rounded overflow-hidden shadow-lg m-auto mt-3">
      <Image className="w-full" filename={banner} alt={name} />
      <div className="px-6 py-4">
        <div className="flex">
          <div className="font-bold text-xl">{name}</div>
          <span className="rounded-full inline-block bg-green-500 uppercase px-2 py-2 ml-2 text-xs text-white font-bold leading-tight">20/100</span>
        </div>
        <p className="text-xl text-base">
          Click to connect: <a href={`steam://connect/${ip}:${port}`} className="text-blue-700" data-tip={`Click to connect directly to ${name} through Steam!`}>{ip}:{port}</a>
        </p>
      </div>
      <p className="text-sm px-6">Plugins</p>
      <div className="px-6 pt-1 pb-0">
        {serverPlugins}
      </div>
    </div>
  )
}

function getPlugins (source) {
  return source.map(plugin => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{plugin}</span>)
}

export default Server
