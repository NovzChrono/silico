import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const SchemaDB = (props) => {
    return (
    <>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="SchemaDB" />

            <div className=''>
                <div className="container mx-auto">
                    SchemaDB
                </div>
            </div>
        </Authenticated>
    </>
    );
}

export default SchemaDB;
