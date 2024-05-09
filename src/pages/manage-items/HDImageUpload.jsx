import React from 'react';

// components
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";
import HDImageUploadTable from "@/components/manage-items/HDImageUploadTable";

export default function HDImageUpload() {
    return (
        <Preloader>
            {/* page title  */}
            <Row>
                <Column className="w-full md:w-1/2 px-4">
                    <p className="text-xl font-bold mt-3 mb-5">High-Definition Product Images</p>
                </Column>
            </Row>

            {/* content  */}
            <Row>
                <Column className="w-full px-4">
                    <Card className="relative p-6">
                        <HDImageUploadTable />
                    </Card>
                </Column>
            </Row>
        </Preloader>
    )
}