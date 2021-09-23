import { screen } from '@testing-library/react';
import Landing from '.';
import { Button } from '../../components';
import { MemoryRouter } from 'react';
import { render } from 'react-dom'

describe('Landing', () => {

    beforeAll(() => {
        render(<Landing />, { wrapper: MemoryRouter })
        render(<Button />);
    })

    test('it shows page header', () => {
        expect(screen.getByRole('heading').textContent).toContain('');
    })

    test("renders page buttons", () => {
        const buttons = screen.queryByRole('button')
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toBe(4);
    });

    test('buttons redirect to correct pages', () => {
        expect().toHaveBeenCalledTimes(1);
        expect()
    })

    test('What you want to test', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })
})