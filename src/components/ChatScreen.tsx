import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ChatScreen() {
    return (
        <gridLayout rows="auto, *, auto" className="bg-white">
            {/* Header exactement comme la maquette */}
            <gridLayout row="0" columns="auto, *, auto" className="bg-[#65adf1] p-4">
                <label col="0" className="text-white text-2xl" text="⌂"/>
                <label col="1" className="text-white text-2xl text-center" text="W.A.M"/>
                <label col="2" className="text-white text-2xl" text="🔍"/>
            </gridLayout>

            {/* Zone centrale avec les boutons prédéfinis */}
            <stackLayout row="1" className="p-4">
                <button className="bg-[#65adf1] text-white rounded-full p-4 mb-4">
                    <formattedString>
                        <span text="Propose moi des activités"/>
                    </formattedString>
                </button>
                <button className="bg-[#65adf1] text-white rounded-full p-4 mb-4">
                    <formattedString>
                        <span text="Montre moi les meilleurs bars"/>
                    </formattedString>
                </button>
                
                {/* Barre de recherche vocale */}
                <gridLayout columns="auto, *" className="bg-gray-100 rounded-full p-4 mt-4">
                    <label col="0" className="text-2xl mr-2" text="🎤"/>
                    <label col="1" className="text-gray-400" text="Recherchez quoi faire"/>
                </gridLayout>
            </stackLayout>

            {/* Navigation du bas identique */}
            <gridLayout row="2" columns="*, *, *" className="bg-[#65adf1] p-4">
                <label col="0" className="text-white text-center" text="⚙️"/>
                <label col="1" className="text-white text-center" text="❓"/>
                <label col="2" className="text-white text-center" text="📍"/>
            </gridLayout>
        </gridLayout>
    );
}