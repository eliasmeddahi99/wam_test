import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function MapScreen() {
    return (
        <gridLayout rows="auto, *, auto" className="bg-white">
            {/* Header identique */}
            <gridLayout row="0" columns="auto, *, auto" className="bg-[#65adf1] p-4">
                <label col="0" className="text-white text-2xl" text="⌂"/>
                <label col="1" className="text-white text-2xl text-center" text="W.A.M"/>
                <label col="2" className="text-white text-2xl" text="🔍"/>
            </gridLayout>

            {/* Zone de carte avec filtres */}
            <gridLayout row="1">
                <mapView className="w-full h-full"/>
                <stackLayout verticalAlignment="top" className="p-4">
                    <gridLayout columns="auto,auto,auto,auto" className="bg-white rounded-full p-2">
                        <label col="0" className="mx-2" text="🍽️"/>
                        <label col="1" className="mx-2" text="🎵"/>
                        <label col="2" className="mx-2" text="🎨"/>
                        <label col="3" className="mx-2" text="🏛️"/>
                    </gridLayout>
                </stackLayout>
            </gridLayout>

            {/* Navigation du bas */}
            <gridLayout row="2" columns="*, *, *" className="bg-[#65adf1] p-4">
                <label col="0" className="text-white text-center" text="⚙️"/>
                <label col="1" className="text-white text-center" text="❓"/>
                <label col="2" className="text-white text-center" text="📍"/>
            </gridLayout>
        </gridLayout>
    );
}