import { render, screen, waitFor } from "@testing-library/react";
import { FriendsList } from "./FriendsList";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");
    return { 
        ...actual, 
        useNavigate: () => mockNavigate 
    };
});

describe("FriendsList Component", () => {
        const mockUsers = {
            users: [
                { id: 1, firstName: "Alice", lastName: "Smith", age: 25, gender: "female", image: "alice.jpg" },
                { id: 2, firstName: "Bob", lastName: "Jones", age: 30, gender: "male", image: "bob.jpg" }
            ]
    };

    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockUsers),
            })
        );
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("fetches and displays a list of friends", async () => {
        render(
            <MemoryRouter>
                <FriendsList />
            </MemoryRouter>
        );
        
        const firstFriend = await screen.findByText(/Alice Smith/i);
        const secondFriend = await screen.findByText(/Bob Jones/i);

        expect(firstFriend).toBeInTheDocument();
        expect(secondFriend).toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});