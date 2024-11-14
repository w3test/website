import * as React from "react";
import { Container, Section } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Box, Separator } from "@radix-ui/themes";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";

export default function WhatIsTheSun() {
    return (
        <MobileMenuProvider>
            <PrimitivesMobileMenu />

            <TitleAndMetaTags
                title="What is the Sun"
                description="Learn about the Sun, its characteristics, and its importance to our solar system."
                image="sun.png"
            />
            <Box style={{ height: 0 }}>
                <PrimitivesHeader ghost />
            </Box>
            <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                <Section size={{ initial: "2", md: "4" }}>
                    <h1>What is the Sun?</h1>
                    <p>The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, and it provides the energy necessary for life on Earth.</p>
                </Section>
                <Separator size="2" />
                <Section size={{ initial: "2", md: "4" }} pb="0">
                    <Footer />
                </Section>
            </Container>
        </MobileMenuProvider>
    );
}