import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';

const RecordingPage: NextPage = () => {
    const recordingId = useRouter().query.id;

    useEffect(() => {
        if(!recordingId) return;
        (async ()=>{
            const data =  (await fetch(`/api/recording/${recordingId}`).then((res) => res.json()));

            new rrwebPlayer({
                target: document.getElementById("rrweb"), // customizable root element
                props: {
                  events:data,
                },
              });

        })()
   

    }, [recordingId]);
	return (
		<React.Fragment>
			<Head>
			<title>test rrweb</title>
			</Head>
			<div className="flex w-full items-center justify-center" style={{
                height:"100vh"
            }}>
                <div id="rrweb">
                </div>
            </div>
	
		</React.Fragment>
	);
};


export default RecordingPage;
