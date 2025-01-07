
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObiTemperature as ObiTempElement} from '@oicl/openbridge-webcomponents/dist/icons/icon-temperature.js';
 
 
 

 
 export const ObiTemp = createComponent({
   react: React,
   tagName: 'obi-temp',
   elementClass: ObiTempElement,
   events: {
     
   }
  });
 
 