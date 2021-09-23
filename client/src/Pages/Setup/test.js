import { render } from 'react-dom'
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import Setup from '.'

describe('Name for test suite', ()=> {
    beforeEach(() => {
        render(<Setup />) // , { initState } this might change, may also want to have it render a different init state based on the test
    })

    test('Includes a form to setup a quiz/create a room multiplayer', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
    })

    test('Includes a single form and input for entering your username', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
        // then check for input of type text with empty value
    })

    test('Renders Header', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Renders Form', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
    })

    test('Renders Footer', () =>{
        // expect().toBeInTheDocument();
        // expect().toHaveBeenCalledTimes(1);
        // expect().toBe();
        // expect().toContain();
        // expect().toEqual();
        // expect().toBeInstanceOf();
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