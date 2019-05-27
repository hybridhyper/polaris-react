import React from 'react';
import isObjectsEqual from '../../../utilities/isObjectsEqual';
import {createPolarisContext} from '../../../components';
import {mountWithAppProvider} from '../../../test-utilities/enzyme';

import useAppBridge from '../use-app-bridge';

describe('useApp', () => {
  it('returns context', () => {
    function Component() {
      return isObjectsEqual(
        useAppBridge(),
        createPolarisContext().appBridge,
      ) ? (
        <div />
      ) : null;
    }

    const component = mountWithAppProvider(<Component />);
    expect(component.find('div')).toHaveLength(1);
  });
});