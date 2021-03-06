import { screen, render } from "@testing-library/react";
import Leaderboard from ".";

jest.mock('axios');

describe("Renders leaderboard", () => {
    beforeEach(() => {
    render(<Leaderboard />);

    test("it renders a leaderboard div", () => {
    const div = screen.getByRole("leaderboard");
    const rows = screen.getAllByRole('row');
    expect(div).toBeInTheDocument(); 
    expect(results).toBeInTheDocument();
    expect(rows.length).toBe(3);
    });

});