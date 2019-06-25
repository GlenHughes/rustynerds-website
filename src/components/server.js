import React from "react";

import Image from "../components/image"

function Server ({ server }) {
  const { name, banner, ip, port, plugins } = server
  const serverPlugins = getPlugins(plugins)
  // console.log(name, ip, port, plugins)
  return (
    <div className="rounded overflow-hidden shadow-lg m-auto mt-3 px-4 py-8 md:p-8 sm:py-0">
      <Image className="w-full" filename={banner} alt={name} />
      <div className="p-2">
        <div className="flex flex-wrap">
          <div class="w-full sm:w-1/2 lg:w-full">
            <span className="font-bold text-xl">{name}</span>
            <span className="rounded bg-green-500 p-1 text-xs text-white font-bold leading-tight ml-2 float-right">20/100</span>
          </div>
          <div className="w-full sm:w-1/2 lg:w-full">
            <a href={`steam://connect/${ip}:${port}`} className="font-bold">{ip}:{port}</a> <a href={`steam://connect/${ip}:${port}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">Connect</a>
          </div>
        </div>
      </div>
      <p className="text-sm px-3">Plugins</p>
      <div className="p-2">
        {serverPlugins}
      </div>
    </div>
  )
}

function getPlugins (source) {
  return source.map(plugin => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{plugin}</span>)
}

export default Server
