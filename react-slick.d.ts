declare module 'react-slick' {
  import { Component, ReactNode } from 'react';

  interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    children?: ReactNode; // Allow children to be passed
    className?: string; // Allow className prop
  }

  export default class Slider extends Component<SliderProps> {}
}

