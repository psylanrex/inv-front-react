import React from "react";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// components
import { Preloader, Row, Column, Heading, Card, Select, Textarea, InputLabel, Button } from "@/components/reactdash-ui";

export default function Support() {
    return (
        <AdminLayout>
            <Preloader>
                {/* page title  */}
                <Row>
                    <Column className="w-full md:w-1/2 px-4">
                        <p className="text-xl font-bold mt-3 mb-5">Support</p>
                    </Column>
                </Row>

                {/* content */}
                <Row>
                    <Column className="w-full px-4">
                        <Card className="relative p-6">
                            <Heading variant="h4" className="text-">Submit a Ticket</Heading>
                            <hr className='py-2' />
                            <div className="mb-6">
                                <label>
                                    {`Have a question? Let us know! You can also email us at `}
                                    <a className="text-[#337ab7]" href='mailto:support@worldwideinventory.com'>support@worldwideinventory.com</a>
                                </label>
                            </div>

                            <Select
                                name="reason"
                                id="reason"
                                label="Reason for contacting us"
                                placeholder="Choose one..."
                                options={[{ "value": "Problem With Item", "title": "Problem With Item" }, { "value": "Problem With Reports", "title": "Problem With Reports" }, { "value": "Understanding Features", "title": "Understanding Features" }]}
                            />
                            <InputLabel name="name" id="name" label="Name" placeholder="Your name" />
                            <InputLabel name="email" id="email" label="Email" placeholder="Email address" />
                            <Textarea name="message" id="message" label="Message" placeholder="Describe your issue..." />
                            <div className="flex justify-end">
                                <Button>Submit</Button>
                            </div>
                        </Card>
                    </Column>
                </Row>
            </Preloader>
        </AdminLayout>
    );
}
