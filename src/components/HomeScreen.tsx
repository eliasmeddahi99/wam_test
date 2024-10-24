import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";

type HomeScreenProps = {
    route: RouteProp<any, "Home">,
    navigation: FrameNavigationProp<any, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <gridLayout rows="auto, *, auto" className="bg-white">
            {/* Header exactement comme dans la maquette */}
            <gridLayout row="0" columns="auto, *, auto" className="bg-[#65adf1] p-4">
                <label col="0" className="text-white text-2xl" text="⌂"/>
                <label col="1" className="text-white text-2xl text-center" text="W.A.M"/>
                <label col="2" className="text-white text-2xl" text="🔔"/>
            </gridLayout>

            {/* Barre de recherche avec Near me */}
            <stackLayout row="1" className="p-4">
                <gridLayout columns="auto, *, auto" className="bg-gray-100 rounded-full p-2 mb-4">
                    <label col="0" className="text-gray-400 ml-2" text="🔍"/>
                    <textField col="1" hint="Recherchez" className="ml-2"/>
                    <label col="2" className="text-gray-400 mr-2" text="▼"/>
                </gridLayout>

                {/* Catégories avec images exactes */}
                <gridLayout columns="*, *, *" rows="*, *" className="mb-4">
                    <stackLayout col="0" row="0" className="m-2 bg-white rounded-lg shadow">
                        <image src="~/images/restaurant.jpg" className="w-full h-24 rounded-t-lg"/>
                        <label className="text-center p-2" text="Restaurants"/>
                    </stackLayout>
                    <stackLayout col="1" row="0" className="m-2 bg-white rounded-lg shadow">
                        <image src="~/images/club.jpg" className="w-full h-24 rounded-t-lg"/>
                        <label className="text-center p-2" text="Club/Bar"/>
                    </stackLayout>
                    <stackLayout col="2" row="0" className="m-2 bg-white rounded-lg shadow">
                        <image src="~/images/activities.jpg" className="w-full h-24 rounded-t-lg"/>
                        <label className="text-center p-2" text="Activités"/>
                    </stackLayout>
                    <stackLayout col="0" row="1" colSpan="3" className="m-2 bg-white rounded-lg shadow">
                        <image src="~/images/cultural.jpg" className="w-full h-24 rounded-t-lg"/>
                        <label className="text-center p-2" text="Visites culturelles"/>
                    </stackLayout>
                </gridLayout>

                {/* Section À la une */}
                <label className="text-lg font-bold mb-2" text="À la une"/>
                <scrollView orientation="horizontal" className="mb-4">
                    <stackLayout orientation="horizontal">
                        <image src="~/images/ushuaia.jpg" className="w-32 h-32 rounded-lg mr-2"/>
                        <image src="~/images/niagara.jpg" className="w-32 h-32 rounded-lg mr-2"/>
                        <image src="~/images/louvre.jpg" className="w-32 h-32 rounded-lg"/>
                    </stackLayout>
                </scrollView>
            </stackLayout>

            {/* Navigation du bas exacte */}
            <gridLayout row="2" columns="*, *, *" className="bg-[#65adf1] p-4">
                <stackLayout col="0" className="text-center">
                    <label className="text-white text-2xl" text="⚙️"/>
                </stackLayout>
                <stackLayout col="1" className="text-center">
                    <label className="text-white text-2xl" text="❓"/>
                </stackLayout>
                <stackLayout col="2" className="text-center">
                    <label className="text-white text-2xl" text="📍"/>
                </stackLayout>
            </gridLayout>
        </gridLayout>
    );
}