import { render, screen, fireEvent } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { UserContext } from '../../context/UserContext';
import { MemoryRouter } from 'react-router';
import { getWeekday, getMonth, getYear, getDay } from '../../utils';
import { vi } from 'vitest';

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");
    return {
        ...actual,
        useNavigate: () => mockNavigate
    }
});

vi.mock("../../utils", () => ({
  getWeekday: () => "Monday",
  getMonth: () => "January",
  getDay: () => "1",
  getYear: () => "2025",
}));

describe("Dashboard Component", () => {
    const mockUser = {
        username: "John Doe",
        userEmail: "john@example.com"
    };

    const renderDashboard = () => {
        return render (
            <UserContext.Provider value={{ currentUser: mockUser }}>
                <MemoryRouter>
                    <Dashboard />
                </MemoryRouter>
            </UserContext.Provider>
        );
    };

    test("renders user information from context", () => {
        renderDashboard();

        expect(screen.getByText(/Welcome Back, John Doe!/i)).toBeInTheDocument();
        
        expect(screen.getByText(/Monday, January 1, 2025/i)).toBeInTheDocument();

        expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    test("navigates to friends page when button is clicked", () => {
        renderDashboard();

        const friendsBtn = screen.getByRole("button", { name: /friends/i });
        fireEvent.click(friendsBtn);

        expect(mockNavigate).toHaveBeenCalledWith('/friends');
    });

    test("renders activity board sections", () => {
        renderDashboard();
        
        expect(screen.getByText(/Recent Activity/i)).toBeInTheDocument();
        expect(screen.getByText(/Succesfully logged in/i)).toBeInTheDocument();
    });
});