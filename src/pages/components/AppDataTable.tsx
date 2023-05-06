import React from 'react';

import {
  StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  CustomColumn,
  NumericalColumn,
  StringColumn,
  DatetimeColumn,
  NUMERICAL_FORMATS,
  COLUMNS,
} from 'baseui/data-table';
import { useStyletron } from 'baseui';
import { StarRating } from 'baseui/rating';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import Image from 'next/image';

type RowDataT = {
  title: string;
  description: string;
  language: string;
  price: number;
  totalEnrolled: number;
  startDate: Date;
  endDate: Date;
  rating: { rating: number };
  active: boolean;
};

const columns = [
  StringColumn({
    title: 'Course',
    mapDataToValue: (data: RowDataT) => data.title,
  }),
  StringColumn({
    title: 'Description',
    lineClamp: 1,
    maxWidth: 300,
    mapDataToValue: (data: RowDataT) => data.description,
  }),
  StringColumn({
    title: 'Language',
    mapDataToValue: (data: RowDataT) => data.language,
  }),
  NumericalColumn({
    title: 'Enrolled',
    mapDataToValue: (data: RowDataT) => data.totalEnrolled,
  }),
  NumericalColumn({
    title: 'Price',
    mapDataToValue: (data: RowDataT) => data.price,
  }),
  DatetimeColumn({
    title: 'Start',
    mapDataToValue: (data: RowDataT) => data.startDate,
  }),
  DatetimeColumn({
    title: 'End',
    mapDataToValue: (data: RowDataT) => data.endDate,
  }),
  CustomColumn<{ rating: number }, {}>({
    title: 'Difficulty',
    mapDataToValue: (data: RowDataT) => data.rating,
    renderCell: function Cell(props: any) {
      return (
        <div className="flex">
          <StarRating value={props.value} readOnly />
        </div>
      );
    },
  }),
  BooleanColumn({
    title: 'Active',
    mapDataToValue: (data: RowDataT) => data.active,
  }),
];

const rows = [
  {
    title: 'Solidity Bootcamp',
    description: 'Learn how to write smart contract in 6 weeks',
    language: 'Solidity',
    totalEnrolled: 1,
    price: 500,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 1,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Zero Knowledge Proofs',
    description: 'Learn zkSNARKS, Circom, StarkNet, ZkApps and more',
    language: 'Zokrates, Snarkjs, Circom',
    totalEnrolled: 0,
    price: 3000,
    startDate: 1684800000000,
    endDate: 1685800000000,
    rating: 4,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Expert Solidity',
    description: 'Become an expert in Gas Optimization, Yul, Assemly and more',
    language: 'Solidity',
    totalEnrolled: 0,
    price: 1050,
    startDate: 1643800000000,
    endDate: 1645800000000,
    rating: 5,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Huff Bootcamp',
    description:
      'Low level EVM programming language to make highlt optimized smart contracts',
    language: 'Solidity, Huff',
    totalEnrolled: 3,
    price: 1050,
    startDate: 1685800000000,
    endDate: 1690800000000,
    rating: 5,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Advanced Solidity',
    description: 'Solidity programming to understand OP codes',
    language: 'Solidity',
    totalEnrolled: 2,
    price: 2500,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 3,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Solana Bootcamp',
    description: 'Create NFTs collection on Solana',
    language: 'Rust, Anchor, Seahorse',
    totalEnrolled: 1,
    price: 550,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 2,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'BNB Bootcamp',
    description: 'Build Dapps on GreenField testnet',
    language: 'Typescript, Solidity',
    totalEnrolled: 11,
    price: 250,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 2,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Polkadot Bootcamp',
    description: 'Build on Ascala EVM',
    language: 'Solidity, Typescript',
    totalEnrolled: 0,
    price: 450,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 3,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Damn Vulnarable DEFI',
    description: 'Solve smart contract puzzles',
    language: 'Solidity',
    totalEnrolled: 4,
    price: 250,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 4,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'Ethernaut Bootcamp',
    description: 'Solve smart contract puzzles',
    language: 'Solidity',
    totalEnrolled: 5,
    price: 250,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 3,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
  {
    title: 'MEV Flashbots Bootcamp',
    description:
      'Bundle transactions with flashbots and send tx to the relayer',
    language: 'Python',
    totalEnrolled: 2,
    price: 1250,
    startDate: 1683800000000,
    endDate: 1685800000000,
    rating: 3,
    active: true,
    url: 'https://source.unsplash.com/user/erondu/700x400',
  },
].map((r) => ({ id: r.title, data: r }));

console.log(rows);

const AppDataTable = () => {
  const [rating, setRating] = React.useState(4);
  const [css] = useStyletron();
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {rows.map((item: any, index: number) => {
            return (
              <div key={index}>
                <Card
                  overrides={{
                    Root: { style: { width: '328px', height: '400px' } },
                  }}
                  title={item.data.title}
                  headerImage={item.data.url}
                >
                  <div className="flex flex-col justify-between">
                    <StyledBody className="line-clamp-2">
                      {item.data.description}
                    </StyledBody>
                    <StyledAction>
                      <Button
                        className=""
                        overrides={{
                          BaseButton: {
                            style: { width: '100%' },
                          },
                        }}
                      >
                        Enroll
                      </Button>
                    </StyledAction>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[500px]">
        <StatefulDataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default AppDataTable;
