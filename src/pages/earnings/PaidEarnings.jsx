import React from 'react';

// components
import { Preloader, Row, Column, Card, Input, Button } from "@/components/reactdash-ui";
import PaidEarningTable from "@/components/earnings/PaidEarningTable";

export default function PaidEarnings() {
    return (
        <Preloader>
            {/* page title  */}
            <Row>
                <Column className="w-full md:w-1/2 px-4">
                    <p className="text-xl font-bold mt-3 mb-5">Paid Earnings</p>
                </Column>
            </Row>

            {/* filter  */}
            <Row>
                <Column className="w-full p-4">
                    <Card className="relative p-6">
                        <div className='flex gap-2'>
                            <div className='flex'>
                                <Input type="date" id="start_date" className="w-[200px] rounded-r-none" name="start_date" placeholder="Start Date" />
                                <span className='bg-[#eee] p-2 border-gray-300 border-y-[1px] text-[#555]'>To</span>
                                <Input type="date" id="end_date" className="w-[200px] rounded-l-none" name="end_date" placeholder="End Date" />
                            </div>
                            <Button>Submit</Button>
                        </div>
                    </Card>
                </Column>
            </Row>

            {/* content  */}
            <Row>
                <Column className="w-full px-4">
                    <Card className="relative p-6">
                        <PaidEarningTable />
                    </Card>
                </Column>
            </Row>
        </Preloader>
    )
}