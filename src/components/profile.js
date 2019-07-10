import React from "react";
import moment from "moment"

const row = (name, value) => {
  return <div className="text-sm"><span className="">{name}:</span> <span className="font-bold">{value}</span></div>
}

const Profile = ({ data }) => {
  return (
    <div className="flex p-2 border border-t-0 border-b-0 border-gray-300 border-solid">
      <div className="w-1/2 p-1">
        <h2 className="underline font-bold">General</h2>
        {row("Last Active", moment(data.ActiveDate).fromNow())}
        {row("Suicides", data.Suicides)}
        {row("SDR (Suicide Death Rate)", data.SDR)}
        <h2 className="underline font-bold mt-2">Raiding</h2>
        {row("Explosives Thrown", data.ExplosivesThrown)}
        {row("Rockets Launched", data.RocketsLaunched)}
        {row("Sleepers Killed", data.SleepersKilled)}
      </div>
      <div className="w-1/2 p-1">
        <h2 className="underline font-bold">Combat</h2>
        {row("Arrows Fired", data.ArrowsFired)}
        {row("Bullets Fired", data.BulletsFired)}
        {row("PVE Kills", data.PVEKills)}
        {row("PVE Distance", data.PVEDistance)}
        {row("NPC Kills", data.NPCKills)}
        {row("NPC Distance", data.NPCDistance)}
        {row("Headshots", data.Headshots)}
        {row("Skulls Crushed", data.SkullsCrushed)}
        {row("Times Wounded", data.TimesWounded)}
        {row("Times Healed", data.TimesHealed)}
      </div>
      <div className="w-1/2 p-1">
        <h2 className="underline font-bold">Building</h2>
        {row("Resources Gathered", data.ResourcesGathered)}
        {row("Structures Upgraded", data.StructuresUpgraded)}
        {row("Structures Built", data.StructuresBuilt)}
        {row("Structures Demolished", data.StructuresDemolished)}
        {row("Items Deployed", data.ItemsDeployed)}
        {row("Items Crafted", data.ItemsCrafted)}
        {row("Entities Repaired", data.EntitiesRepaired)}
      </div>
      <div className="w-1/2 p-1">
        <h2 className="underline font-bold">Looting / Events</h2>
        {row("Barrels Destroyed", data.BarrelsDestroyed)}
        {row("Drops Looted", data.DropsLooted)}
        {row("Heli Hits", data.HeliHits)}
        {row("Heli Kills", data.HeliKills)}
        {row("APC Hits", data.APCHits)}
        {row("APC Kills", data.APCKills)}
      </div>
    </div>
  ) 
}

export default Profile
