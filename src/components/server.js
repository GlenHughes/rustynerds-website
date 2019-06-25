import React from "react";

import Image from "../components/image"

function Server ({ server }) {
  const { name, banner, ip, port, plugins, battleMetrics } = server
  const serverPlugins = getPlugins(plugins)
  return (
    <div className="flex">
      <div className="w-3/4">
        <div className="rounded overflow-hidden shadow-lg m-auto mt-3 px-4 py-8 md:p-8 sm:py-0">
          <Image className="w-full" filename={banner} alt={name} />
          <div className="p-2">
            <div className="flex flex-wrap">
              <div className="w-full">
                <span className="font-bold text-xl">{name}</span>
                <a href={`steam://connect/${ip}:${port}`} className="font-bold">{ip}:{port}</a> <a href={`steam://connect/${ip}:${port}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded float-right">Connect</a>
              </div>
            </div>
          </div>
          <p className="text-sm px-3">Plugins</p>
          <div className="p-2">
            {serverPlugins}
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <div className="p-2">
          <h2 className="font-bold text-xl">Battle Metrics</h2>
          <img src={`https://cdn.battlemetrics.com/b/standardVertical/${battleMetrics}.png?foreground=%23000000&linkColor=%23FF0700&lines=%23333333&background=%23EDF1F6&chart=players%3A24H&chartColor=%23FF0700&showPlayers=1&maxPlayersHeight=300`} />
        </div>
      </div>
    </div>
  )
}

function getPlugins (source) {
  return source.map(plugin => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{plugin}</span>)
}

export default Server
