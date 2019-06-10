import React from "react";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import Layout from "../components/layout";
import SEO from "../components/seo";

function ShopPage() {
  return (
    <Layout>
      <SEO
        title="Purchase VIP Upgrades and RP"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `shop`]}
      />
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto p-4 md:p-8">
        <div className="w-full">
          <div className="flex flex-row">
            <div className="flex-col w-1/2 md:w-full">
              <h1 className="text-3xl">Looking for VIP upgrades and or RP?</h1>
              <p className="mt-3">You can purchase VIP or RP directly through our online web store. The whole system is completely automated and uses your Steam ID to link purchases directly to your user account on our servers.</p>
              <p className="mt-3">All VIP upgrades are FOR LIFE and any RP purchases are carried over on regular or forced wipes!</p>
            </div>
            <div className="flex-col w-1/2 md:w-full">
              <Tabs
                defaultTab="vip-black"
                onChange={(tabId) => { console.log(tabId) }}
              >
                <TabList>
                  <Tab tabFor="vip-black" className="bg-gold text-black inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold">[VIP BLACK]</Tab>
                  <Tab tabFor="vip-plus" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold">[VIP+]</Tab>
                  <Tab tabFor="vip" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold">[VIP]</Tab>
                  <Tab tabFor="supporter" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold">[SUP]</Tab>
                </TabList>
                <TabPanel tabId="vip-black" className="bg-black text-white border-l border-t border-r rounded-t py-2 px-4">
                  <h2>Looking for the ultimate VIP upgrade?</h2>
                  <p>One time payment of £24.99 which entitles you to VIP BLACK for life. Purchasing this rank will also grant you access to all other VIP upgrades too! If you have already purchased VIP and VIP+, please post in #staff-tickets on our Discord server before you make your purchase to get a 30% off one-time-use discount code.</p>
                  <ul>
                    <li>Get 300 RP per day, type /vipblack in chat</li>
                    <li>24RP per 30 mins (200% more)</li>
                    <li>15 points per barrel (200% more)</li>
                    <li>VIP BLACK Daily kit (see screenshot)</li>
                    <li>6 Second teleport countdown, 12 homes and a 60-second cooldown</li>
                    <li>The [VIP BLACK] tag with a coloured username in chat (larger messages)</li>
                    <li>Access to the VIP discord chat room (regular exclusive giveaways)</li>
                    <li>SignArtist Permission (type /si http://linktoyourimage.com)</li>
                    <li>CallHeli Permission (type /callheli) to spawn heli on yourself use once per day</li>
                  </ul>
                </TabPanel>
                <TabPanel tabId="vip-plus">
                  <p>One time payment of £9.99 which entitles you to VIP+ for life. All upgrades work together so you can have Supporter, VIP and VIP+ at the same time.</p>
                  <ul>
                    <li>20 RP per 30 mins (150% more)</li>
                    <li>12.5 points per barrel (150% more)</li>
                    <li>3000 Scrap per day</li>
                    <li>10 Second teleport countdown, 9 homes and a 75-second cooldown</li>
                    <li>The [VIP+] tag with a coloured username in chat (larger messages)</li>
                    <li>Access to the VIP discord chat room (regular exclusive giveaways)</li>
                    <li>SignArtist Permission (type /si http://linktoyourimage.com)</li>
                    <li>CallHeli Permission (type /callheli) to spawn heli on yourself use once per day</li>
                  </ul>
                </TabPanel>
                <TabPanel tabId="vip">
                  <p>One time payment of £5.99 which entitles you to VIP for life. All upgrades work together so you can have Supporter, VIP and VIP+ at the same time.</p>
                  <ul>
                    <li>16 RP per 30 mins (100% more)</li>
                    <li>10 points per barrel (100% more)</li>
                    <li>2000 Scrap (in VIP daily kit)</li>
                    <li>15 Second teleport countdown and 90-second cooldown (50% better)</li>
                    <li>Access to the VIP daily kit (check screenshot below)</li>
                    <li>The [VIP] tag on your name in chat</li>
                    <li>Access to the VIP discord chat room (regular exclusive giveaways)</li>
                    <li>SignArtist Permission (type /si http://linktoyourimage.com)</li>
                    <li>CallHeli Permission (type /callheli) to spawn heli on yourself use once per day</li>
                  </ul>
                </TabPanel>
                <TabPanel tabId="supporter">
                  <h2>Supporter Upgrade</h2>
                  <p>One time payment of £2.99 which entitles you to [SUPPORTER] for life. You will also get the [SUP] tag with colouring to your username added on every message. This rank can be used with VIP and VIP+.</p>
                  <p>Additional Perks Include:</p>
                  <ul>
                    <li>12 RP per 30 mins (50% more)</li>
                    <li>1000 Scrap (in Supporter daily kit)</li>
                    <li>The [SUP] tag with a coloured username in chat</li>
                    <li>Access to the VIP discord chat room (regular exclusive giveaways)</li>
                  </ul>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage;
