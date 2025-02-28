import React, { useEffect, useState } from "react";
import {
  BalApp,
  BalFooter,
  BalHeading,
  BalNavbar,
  BalNavbarBrand,
  BalStage,
  BalStageBody,
  BalCard,
  BalCardTitle,
  BalCardSubtitle,
  BalCardContent,
} from "@baloise/design-system-components-react";
import {
  onBalConfigChange,
  BalConfigState,
  BalSwissLanguage,
} from "@baloise/design-system-components";
import PropertyComponent from "./components/PropertyComponent";
import EventComponent from "./components/EventComponent";
import MethodComponent from "./components/MethodComponent";

function App() {
  const [title, setTitle] = useState("Pagespeed Playground react");
  const [subtitle, setSubtitle] = useState("the playground where you see the speed");

  useEffect(() => {
    onBalConfigChange((config: BalConfigState) => {
      const language = config.language as BalSwissLanguage;
      switch (language) {
        case "de":
          setTitle("Pagespeed Playground react");
          setSubtitle("der Spielplatz wo du die Geschwindigkeit siehst");
          break;
        case "it":
          setTitle("Pagespeed Playground react");
          setSubtitle("il parco giochi dove vedi la velocità");
          break;
        case "fr":
          setTitle("Pagespeed Playground react");
          setSubtitle("le terrain de jeu où vous voyez la vitesse");
          break;
        default:
          setTitle("Pagespeed Playground react");
          setSubtitle("the playground where you see the speed");
          break;
      }
    });
  });

  return (
    <BalApp class="has-sticky-footer has-background">
      <header>
        <BalNavbar>
          <BalNavbarBrand>React Example</BalNavbarBrand>
        </BalNavbar>
        <BalStage color="red" size="small">
          <BalStageBody>
            <BalHeading space="none" data-testid="welcome-title">
              {title}
            </BalHeading>
            <BalHeading space="none" subtitle level="h2">
              {subtitle}
            </BalHeading>
          </BalStageBody>
        </BalStage>
      </header>
      <main className="container">
        <BalCard class="mt-large">
          <BalCardTitle>Property example</BalCardTitle>
          <BalCardSubtitle>
            A little demonstration how to change properties of our components
          </BalCardSubtitle>
          <BalCardContent>
            <PropertyComponent />
          </BalCardContent>
        </BalCard>

        <BalCard class="mt-large">
          <BalCardTitle>Event example</BalCardTitle>
          <BalCardSubtitle>
            A short example how to use the events of our components
          </BalCardSubtitle>
          <BalCardContent>
            <EventComponent />
          </BalCardContent>
        </BalCard>

        <BalCard class="mt-large">
          <BalCardTitle>Method example</BalCardTitle>
          <BalCardSubtitle>
            A tiny use case of how to call the components methods
          </BalCardSubtitle>
          <BalCardContent>
            <MethodComponent />
          </BalCardContent>
        </BalCard>
      </main>
      <BalFooter></BalFooter>
    </BalApp>
  );
}

export default App;
