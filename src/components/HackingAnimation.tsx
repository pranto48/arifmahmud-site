
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const hackingText = `///IT Services Console///
    <pranto@services>:::Initializing
           Loading services module@itservices.24.04.25
           ...Connecting to Network Services...
           ...Server Configuration Loading...
           ...Cybersecurity Protocols Active...
           
//Professional IT Solutions\\\\
            ://ServicesLoading...
            (**CONNECTED**)....
                    INITIALIZING ...//SERVICE MODULES...
{accessing. systems.}/// -- \\\\ArifPranto\\\\
  <M> Loading Configurations..:":":":
  
<services.initialized>
         -----system online--
         ....admin@itservices;
                     !!!SERVICES_READY!!!!
                     
Loading Security Protocols...
INITIALIZING .   $%$%$NetworkDefense_Active$%$%$%
      \\\\...Systems OPERATIONAL...
      
///
//
             /If client_satisfaction [ = 100% ]
               //then Success ;
//
////SERVICES_ENGAGED...
      [secure]
       {professional solutions}

Loading Web Development Tools...
Cybersecurity Measures Active...
Technical Support Standing By...

0101010 SERVICE QUALITY ASSURED 1010101
`;

export function HackingAnimation() {
  const textElemRef = useRef<HTMLPreElement>(null);
  const countRef = useRef(0);

  useEffect(() => {
    if (!textElemRef.current) return;

    const textArray = hackingText.split('');
    const textElem = textElemRef.current;
    
    const interval = setInterval(() => {
      if (countRef.current >= textArray.length) {
        countRef.current = 0;
        textElem.innerHTML = '';
      }

      if (textArray[countRef.current] === "\n") {
        textElem.appendChild(document.createElement("br"));
      } else {
        const span = document.createElement("span");
        span.className = "hacking-animation__character";
        span.textContent = textArray[countRef.current];
        textElem.appendChild(span);
      }

      countRef.current++;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hacking-animation bg-black/80 backdrop-blur-sm fixed inset-0 z-10">
      <pre ref={textElemRef} className="hacking-animation__text" />
    </div>
  );
}
