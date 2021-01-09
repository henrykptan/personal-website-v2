import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import FooterSocial from '../layout/partials/FooterSocial'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Henry Tan</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
                Software Engineer
                </p>
              <p className="m-0 reveal-from-bottom" data-reveal-delay="400">
                Oxford Mathematics Graduate
              </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Based in London
                </p>
            </div>
          </div>

          <FooterSocial />

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;