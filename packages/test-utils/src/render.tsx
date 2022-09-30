import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { OverlayProvider } from '@react-aria/overlays';

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
	return render(<OverlayProvider>{ui}</OverlayProvider>, options);
}

export { customRender as render };