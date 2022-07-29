import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { sliders } from '../data/sliders';
import Button from './Button';

function Slider() {
  const [isArrow, setArrow] = useState(false);
  const [numImage, setNumImage] = useState(0);
  const transitions = useTransition(numImage, {
    key: numImage,
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 0.5 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (numImage === item) {
        setNumImage((state) => (state + 1) % sliders.length);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <div className="overflow-hidden flex w-full">
      {transitions((style, i) => (
        <animated.div
          className="h-96 flex items-center w-full"
          style={{
            backgroundImage: `url(${sliders[i].src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            ...style,
          }}
          onMouseMove={() => setArrow(true)}
          onMouseOut={() => setArrow(false)}
        >
          {isArrow && (
            <AiFillCaretLeft
              className="absolute left-0 p-0"
              color="#0000004d"
              size={50}
            />
          )}
          {isArrow && (
            <AiFillCaretRight
              className="absolute right-0"
              color="#0000004d"
              size={50}
            />
          )}

          <div className="ml-4">
            <p className="capitalize text-xl animate__animated animate__fadeInDownBig">
              men collection
            </p>
            <h1 className="uppercase mt-2 mb-6 text-3xl font-bold animate__animated animate__fadeInLeft animate__delay-1s">
              new arrivals
            </h1>
            <div className="animate__animated animate__zoomIn animate__delay-2s">
              <Button text="shop now" />
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
}

export default Slider;
