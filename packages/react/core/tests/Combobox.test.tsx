import { OverlayProvider } from '@react-aria/overlays';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { Combobox, ComboboxItem, ComboboxSection } from '../src';

describe('@project44-manifest/react - Combobox', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();

    act(() => {
      jest.runAllTimers();
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render', () => {
    render(
      <OverlayProvider>
        <Combobox label="Combobox" startIcon={<>icon</>}>
          <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
          <ComboboxSection title="Section">
            <ComboboxItem key="dog">Dog</ComboboxItem>
          </ComboboxSection>
        </Combobox>
      </OverlayProvider>,
    );

    const combobox = screen.getByRole('combobox');

    expect(combobox).toHaveAttribute('autoCorrect', 'off');
    expect(combobox).toHaveAttribute('spellCheck', 'false');
    expect(combobox).toHaveAttribute('autoComplete', 'off');

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'listbox');

    const label = screen.getAllByText('Combobox')[0];
    expect(label).toBeVisible();
  });

  it('should close menu when no items match', () => {
    render(
      <OverlayProvider>
        <Combobox label="Combobox">
          <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
        </Combobox>
      </OverlayProvider>,
    );

    const combobox = screen.getByRole('combobox');

    act(() => {
      combobox.focus();
    });

    fireEvent.change(combobox, { target: { value: 'Bear' } });

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('should open the listbox when opened by the button', () => {
    const onOpenChange = jest.fn();

    render(
      <OverlayProvider>
        <Combobox label="Combobox" onOpenChange={onOpenChange}>
          <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
        </Combobox>
      </OverlayProvider>,
    );

    const trigger = screen.getByRole('button');

    fireEvent.mouseDown(trigger);
    fireEvent.mouseUp(trigger);
    fireEvent.click(trigger);

    act(() => {
      jest.runAllTimers();
    });

    expect(onOpenChange).toHaveBeenCalledWith(true, 'manual');

    const listbox = screen.getByRole('listbox');

    expect(listbox).toBeVisible();
  });

  it('should support item selection', () => {
    const onSelectionChange = jest.fn();

    render(
      <OverlayProvider>
        <Combobox label="Combobox" onSelectionChange={onSelectionChange}>
          <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
        </Combobox>
      </OverlayProvider>,
    );

    const trigger = screen.getByRole('button');

    fireEvent.mouseDown(trigger);
    fireEvent.mouseUp(trigger);
    fireEvent.click(trigger);

    act(() => {
      jest.runAllTimers();
    });

    const listbox = screen.getByRole('listbox');
    const items = within(listbox).getAllByRole('option');

    fireEvent.click(items[0]);

    expect(onSelectionChange).toHaveBeenCalled();
    expect(onSelectionChange).toHaveBeenCalledWith('ardvark');
  });

  it('should open the listbox when opened by the keyboard', () => {
    render(
      <OverlayProvider>
        <Combobox label="Combobox">
          <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
        </Combobox>
      </OverlayProvider>,
    );

    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown', code: 38, charCode: 38 });

    act(() => {
      jest.runAllTimers();
    });

    const listbox = screen.getByRole('listbox');

    expect(listbox).toBeVisible();
  });

  it('should support being controlled', () => {
    const onInputChange = jest.fn();
    const onOpenChange = jest.fn();

    render(
      <OverlayProvider>
        <Combobox label="Combobox" onInputChange={onInputChange} onOpenChange={onOpenChange}>
          <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
        </Combobox>
      </OverlayProvider>,
    );

    const combobox = screen.getByRole('combobox');

    expect(combobox).toBeVisible();

    act(() => {
      combobox.focus();
    });

    fireEvent.change(combobox, { target: { value: 'Kan' } });

    act(() => {
      jest.runAllTimers();
    });

    expect(onInputChange).toHaveBeenCalled();
    expect(onOpenChange).toHaveBeenCalled();
  });
});