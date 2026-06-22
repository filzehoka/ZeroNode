// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZeroNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZeroNode/i);
    expect(titleElement).toBeInTheDocument();
});
