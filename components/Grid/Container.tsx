import classNames from 'classnames';
import * as React from 'react';
import PropTypes from 'prop-types';

import { useBootstrapPrefix } from './ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';

export interface ContainerProps
  extends BsPrefixProps,
    React.HTMLAttributes<HTMLElement> {
  fluid?: boolean | string | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const propTypes = {
  /**
   * @default 'container'
   */
  bsPrefix: PropTypes.string,

  /**
   * Allow the Container to fill all of its available horizontal space.
   * @type {(true|"sm"|"md"|"lg"|"xl"|"xxl")}
   */
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  as: PropTypes.elementType,
};

const defaultProps = {
  fluid: false,
};

const Container: BsPrefixRefForwardingComponent<'div', ContainerProps> =
  React.forwardRef<HTMLElement, ContainerProps>(
    (
      {
        bsPrefix,
        fluid,
        as: Component = 'div',
        className,
        ...props
      },
      ref,
    ) => {
      const prefix = useBootstrapPrefix(bsPrefix, 'container');
      const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
      return (
        <Component
          ref={ref}
          {...props}
          className={classNames(
            className,
            fluid ? `${prefix}${suffix}` : prefix,
          )}
        />
      );
    },
  );

Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;