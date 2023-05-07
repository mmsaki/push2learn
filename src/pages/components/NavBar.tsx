import { StatefulInput } from 'baseui/input';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import React from 'react';
import { ChevronDown } from 'baseui/icon';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import { Tabs, Tab } from 'baseui/tabs-motion';
import AppDataTable from './AppDataTable';
import CourseView from './CourseView';

const ITEMS = [
  { label: 'Solidity Bootcamp I' },
  { label: 'Zero Knowledge Proofs' },
  { label: 'Expert solidity' },
  { label: 'Huff Bootcamp' },
  { label: 'Advanced Solidity' },
  { label: 'Solana Bootcamp' },
  { label: 'Build Dapps Bootcamp' },
  { label: 'BNB Bootcamp' },
  { label: 'Polkadot Bootcamp' },
  { label: 'Damn Vulnarable DEFI' },
  { label: 'Ethernaut Bootcamp' },
  { label: 'MEV Bots Bootcamp' },
];

const NavBar = () => {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-4 px-4">
        <div className="flex">
          {/* logo */}
          <StatefulPopover
            focusLock
            placement={PLACEMENT.bottomLeft}
            content={({ close }) => (
              <StatefulMenu
                items={ITEMS}
                onItemSelect={() => close()}
                overrides={{
                  List: { style: { height: '250px', width: 'full' } },
                }}
              />
            )}
          >
            {/* title */}
            <Button className="text-2xl font-normal uppercase">
              push <span className="text-[#EF1E23] font-bold">2</span> learn
              <ChevronDown size={32} />
            </Button>
          </StatefulPopover>
        </div>
        {/* search */}
        <div className="flex gap-2">
          <StatefulInput />
          <Button className="text-xl">Search</Button>
        </div>
      </div>
      <div className="px-8">
        <Tabs
          activeKey={activeKey}
          onChange={({ activeKey }) => setActiveKey(activeKey)}
          endEnhancer={
            <Button size={SIZE.compact} shape={SHAPE.pill}>
              Manage
            </Button>
          }
        >
          <Tab title="Catalogue">
            <AppDataTable />
          </Tab>
          <Tab title="Purchases">Here you can create new classess</Tab>
          <Tab title="Courses">
            <CourseView />
          </Tab>
          <Tab title="Projects">Project Material lives here</Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default NavBar;
