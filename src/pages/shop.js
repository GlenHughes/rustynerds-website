import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import ReactModal from "react-modal"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

ReactModal.setAppElement("#___gatsby")

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ShopPage extends Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    console.log("open clicked")
    this.setState({modalIsOpen: true})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () { 
    return (
      <Layout>
        <SEO
          title="Purchase VIP Upgrades and or RP"
          keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `shop`, `vip`, `vip-black`, `vip-plus`]}
        />
        <div className="justify-between max-w-6xl mx-auto p-4 sm:py-12">
          <div className="w-full text-center px-3">
            <h1 className="text-3xl font-serif">Looking for VIP upgrades and or RP?</h1>
            <p className="mt-3">You can purchase <span className="text-yellow-500 font-bold">VIP</span> or <span className="font-bold">RP</span> directly through our online web store. The whole system is completely automated and uses your Steam ID to link purchases directly to your user account on our servers.</p>
            <p className="mt-3">All VIP upgrades are FOR LIFE and any RP purchases are carried over on regular or forced wipes!</p>
          </div>
          <div className="mt-6">
            <ReactModal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Select Server"
            >
              <div className="w-full max-w-md p-5 text-center">
                <h2 className="font-serif text-2xl">Which server are you playing on?</h2>
                <p>Please choose the server's store that you are playing on by clicking one of the buttons below. The upgrade will be automatically applied to your account within 1 miunute!</p>
                <p className="mt-5 text-center">
                  <a className="btn btn-blue hover:bg-blue-700" href="https://app.gpay.io/store/rustynerds-x2" target="_blank">x2 Server</a>
                  <a className="btn btn-blue mx-3 hover:bg-blue-700" href="https://app.gpay.io/store/rustynerds-x5" target="_blank">x5 Server</a>
                </p>
              </div>
            </ReactModal>
            <Tabs
              defaultTab="vip-black"
            >
              <TabList>
                <Tab tabFor="vip-black" className="bg-black text-yellow-500 text-black inline-block border-l border-t border-r rounded-t p-1 px-2 sm:py-2 sm:px-4 sm:font-bold">[VIP-BLACK]</Tab>
                <Tab tabFor="vip-plus" className="bg-yellow-500 inline-block border-l border-t border-r rounded-t p-1 px-2 sm:py-2 sm:px-4 text-blue-dark sm:font-bold">[VIP+]</Tab>
                <Tab tabFor="vip" className="bg-yellow-400 inline-block border-l border-t border-r rounded-t p-1 px-2 sm:py-2 sm:px-4 text-blue-dark sm:font-bold">[VIP]</Tab>
                <Tab tabFor="supporter" className="bg-red-200 inline-block border-l border-t border-r rounded-t p-1 px-2 sm:py-2 sm:px-4 text-blue-dark sm:font-bold">[SUP]</Tab>
              </TabList>
              <TabPanel tabId="vip-black" className="border-l border-t border-r border-b rounded-t">
                <div className="md:flex pb-5">
                  <div className="w-full md:w-1/2 text-center">
                    <Image filename="black-kit.png" alt="The daily VIP-BLACK Kit items" />
                    <h2 className="font-serif text-2xl my-2">The Ultimate Upgrade!</h2>
                    <p className="text-gray-700 text-base px-4">One time payment of <span className="font-bold">£24.99</span> which entitles you to <span className="font-black">[VIP-BLACK]</span> for life. Purchasing this rank will also grant you access to all other VIP kits too! If you have already purchased VIP and VIP+, please post in #staff-tickets on our Discord server before you make your purchase to get a 30% off one-time-use discount code.</p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-b p-4">
                    <h2 className="text-center text-2xl font-serif">What you get for life!</h2>
                    <div className="lg:flex">
                      <ul className="list-disc mt-2 list-inside px-4 w-full lg:w-1/2">
                        <li>Get <span className="font-bold">300 RP</span> per day <span className="text-red-600">(type /vipblack in chat)</span></li>
                        <li><span className="font-bold">24RP</span> per 30 mins (200% more)</li>
                        <li><span className="font-bold">15</span> points per barrel (200% more)</li>
                        <li><span className="font-black">[VIP-BLACK]</span> Daily kit (see screenshot)</li>
                        <li><span className="font-bold">6</span> Second teleport countdown, 12 homes and a 60-second cooldown</li>
                      </ul>
                      <ul className="list-disc mt-2 list-inside px-4 w-full lg:w-1/2">
                        <li>The <span className="font-black">[VIP BLACK]</span> tag with a coloured username in chat (larger messages)</li>
                        <li>Access to the <span className="text-yellow-500 font-bold">VIP</span> discord chat room (regular exclusive giveaways)</li>
                        <li>SignArtist Permission <span className="text-red-600">(type /si http://linktoyourimage.com)</span></li>
                        <li>CallHeli Permission <span className="text-red-600">(type /callheli)</span> to spawn heli on yourself use once per day</li>
                      </ul>
                    </div>
                    <div className="mt-5 text-center w-full">
                      <button className="btn bg-green-500 hover:bg-green-700 border-b-4 border-green-900" onClick={this.openModal}>Ready to Upgrade?</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel tabId="vip-plus" className="border-l border-t border-r border-b rounded-t">
                <div className="md:flex pb-5">
                  <div className="w-full md:w-1/2 text-center">
                    <Image filename="vip-plus-kit.png" alt="The daily VIP+ Kit items" />
                    <h2 className="font-serif text-2xl my-2">Get the most popular upgrade!</h2>
                    <p className="text-gray-700 text-base px-4">One time payment of £9.99 which entitles you to <span className="text-yellow-700">[VIP+]</span> for life. All upgrades work together so you can have Supporter, VIP and VIP+ at the same time.</p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-b p-4">
                    <h2 className="text-center text-2xl font-serif">What you get for life!</h2>
                    <div className="lg:flex">
                      <ul className="list-disc mt-2 list-inside px-4 w-full lg:w-1/2">
                        <li><span className="font-bold">20</span> RP per 30 mins (150% more)</li>
                        <li><span className="font-bold">12.5</span> points per barrel (150% more)</li>
                        <li><span className="font-bold">3000</span> Scrap per day</li>
                        <li><span className="font-bold">10</span> Second teleport countdown, 9 homes and a 75-second cooldown</li>
                        <li>CallHeli Permission <span className="text-red-600">(type /callheli)</span> to spawn heli on yourself use once per day</li>
                      </ul>
                      <ul className="list-disc mt-2 list-inside px-4 w-full lg:w-1/2">
                        <li>The [VIP+] tag with a coloured username in chat (larger messages)</li>
                        <li>Access to the <span className="text-yellow-400">VIP</span> discord chat room (regular exclusive giveaways)</li>
                        <li>SignArtist Permission <span className="text-red-600">(type /si http://linktoyourimage.com)</span></li>
                      </ul>
                    </div>
                    <div className="mt-5 text-center w-full">
                      <button className="btn bg-green-500 hover:bg-green-700 border-b-4 border-green-900" onClick={this.openModal}>Ready to Upgrade?</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel tabId="vip" className="border-l border-t border-r border-b rounded-t">
                <div className="md:flex pb-5">
                  <div className="w-full md:w-1/2 text-center">
                    <Image filename="vip-kit.png" alt="The daily VIP Kit items" />
                    <h2 className="font-serif text-2xl my-2">Buff your rewards with VIP!</h2>
                    <p className="text-gray-700 text-base px-4">One time payment of <span className="font-bold">£5.99</span> which entitles you to <span className="text-yellow-500">VIP</span> for life. All upgrades work together so you can have Supporter, VIP and VIP+ at the same time.</p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-b p-4">
                    <h2 className="text-center text-2xl font-serif">What you get for life!</h2>
                    <div className="lg:flex">
                      <ul className="list-disc mt-2 list-inside px-4 w-full lg:w-1/2">
                        <li><span className="font-bold">16</span> RP per 30 mins (100% more)</li>
                        <li><span className="font-bold">10</span> points per barrel (100% more)</li>
                        <li><span className="font-bold">2000</span> Scrap (in VIP daily kit)</li>
                        <li><span className="font-bold">15</span> Second teleport countdown and 90-second cooldown (50% better)</li>
                        <li>CallHeli Permission <span className="text-red-600">(type /callheli)</span> to spawn heli on yourself use once per day</li>
                      </ul>
                      <ul className="list-disc mt-2 list-inside px-4 w-full lg:w-1/2">
                        <li>Access to the VIP daily kit (check screenshot below)</li>
                        <li>The [VIP] tag on your name in chat</li>
                        <li>Access to the VIP discord chat room (regular exclusive giveaways)</li>
                        <li>SignArtist Permission <span className="text-red-600">(type /si http://linktoyourimage.com)</span></li>
                      </ul>
                    </div>
                    <div className="mt-5 text-center w-full">
                      <button className="btn bg-green-500 hover:bg-green-700 border-b-4 border-green-900" onClick={this.openModal}>Ready to Upgrade?</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel tabId="supporter" className="border-l border-t border-r border-b rounded-t">
                <div className="md:flex pb-5">
                  <div className="w-full md:w-1/2 text-center">
                    <Image filename="sup-kit.png" alt="The daily VIP Kit items" />
                    <h2 className="font-serif text-2xl my-2">Starter Upgrade</h2>
                    <p className="text-gray-700 text-base px-4">One time payment of <span className="font-bold">£2.99</span> which entitles you to <span className="text-red-300">Supporter</span> for life. You will also get the <span className="text-red-300">[SUP]</span> tag with colouring to your username added on every message. This rank can be used with VIP and VIP+.</p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-b p-4">
                    <h2 className="text-center text-2xl font-serif">What you get for life!</h2>
                    <div className="lg:flex">
                      <ul className="list-disc mt-2 list-inside px-4">
                        <li><span className="font-bold">12</span> RP per 30 mins (50% more)</li>
                        <li><span className="font-bold">1000</span> Scrap (in Supporter daily kit)</li>
                        <li>The <span className="text-red-300">[SUP]</span> tag with a coloured username in chat</li>
                        <li>Access to the VIP discord chat room (regular exclusive giveaways)</li>
                      </ul>
                    </div>
                    <div className="mt-5 text-center w-full">
                      <button className="btn bg-green-500 hover:bg-green-700 border-b-4 border-green-900" onClick={this.openModal}>Ready to Upgrade?</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ShopPage;
