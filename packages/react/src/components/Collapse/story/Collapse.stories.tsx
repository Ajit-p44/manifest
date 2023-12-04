import * as React from 'react';
import { Button, Collapse, CollapseProps } from '../../..';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {
    in: {
      control: 'boolean',
    },
  },
};

export const Default = (args: CollapseProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSetOpen = React.useCallback(() => {
    setIsOpen((prevOpen) => !prevOpen);
  }, [setIsOpen]);

  return (
    <>
      <Button onClick={handleSetOpen}>Toogle</Button>
      <Collapse {...args} in={isOpen}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </Collapse>
    </>
  );
};

Default.args = {
  duration: '200',
};
