import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { FooterContainer, FooterColumn } from "components/Landing/Footer";

export default {
	title: "Landing Footer",
	decorators: [withKnobs],
};

const CerdasLogo = "https://firebasestorage.googleapis.com/v0/b/cerdasgrp.appspot.com/o/Landing%2FCerdasGroupLogoWhite.png?alt=media&token=db9945ec-7b5e-43dc-b036-de1848991727";

const column1 = [
    {
        type: "multiple", level: 0, title: "Products", logo: null, contents: [
            { type: "single", level: 0, title: "Home", linkTo: "/", logo: null },
            { type: "single", level: 0, title: "Home", linkTo: "/", logo: null },
            { type: "single", level: 0, title: "Home", linkTo: "/", logo: null },
        ]
    },
]

export const WhiteFooter = () => {
	return (
		<FooterContainer
			logoURL={CerdasLogo}
			background={text("Background", "#323F4B")}
            color={text("Color", "#fff")}
            IGlink=""
            YoutubeLink=""
		>
            <FooterColumn contents={column1}/>
            <FooterColumn contents={column1}/>
            <FooterColumn contents={column1}/>
        </FooterContainer>
	);
};
