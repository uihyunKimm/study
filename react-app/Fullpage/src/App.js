import React,{useContext} from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import Body from './components/Body';
import Column1 from './components/Column1';
import Column2 from './components/Column2';
import Column3 from './components/Column3';

export default function App() {
  
  let options = {
    activeClass:          'active', // the class that is appended to the sections links
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
    arrowNavigation:      true, // use arrow keys
    className:            'SectionContainer', // the class name for the section container
    delay:                1000, // the scroll animation speed
    navigation:           true, // use dots navigatio
    scrollBar:            false, // use the browser default scrollbar
    verticalAlign:        false,
    sectionClassName:     'Section', // the section class name
    sectionPaddingTop:    '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign:        false // align the content of each section vertical
  };

  return (
    <SectionsContainer {...options}>
      <Body>
        <Section>
          <Column1 />
        </Section>
        <Section>
          <Column2 />
        </Section>
        <Section>
          <Column3 />
        </Section>
      </Body>
    </SectionsContainer>
  );
}