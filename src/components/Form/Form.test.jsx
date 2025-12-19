import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./Form";
import { UserContext } from "../../context/UserContext";
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

describe("Form Component", () => {
    const mockHandleLogin = vi.fn();

    const renderForm = () => {
        return render(
            <UserContext.Provider value={{ handleLogin: mockHandleLogin }}>
                <MemoryRouter>
                    <Form />
                </MemoryRouter>
            </UserContext.Provider>
        );
    };

    test("submit button is disabled when inputs are empty", () => {
        renderForm();
        const submitBtn = screen.getByRole("button", { name: /sign in/i });
        
        expect(submitBtn).toBeDisabled();
    });

    test("updates state and enables button when inputs are filled", () => {
        renderForm();
        
        const nameInput = screen.getByPlaceholderText(/enter your username/i);
        const emailInput = screen.getByPlaceholderText(/enter your email/i);
        const submitBtn = screen.getByRole('button', { name: /sign in/i });

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });

        expect(submitBtn).not.toBeDisabled();
    });

    test("calls handleLogin and navigates on successful submit", () => {
        renderForm();
        
        const nameInput = screen.getByPlaceholderText(/enter your username/i);
        const emailInput = screen.getByPlaceholderText(/enter your email/i);
        const submitBtn = screen.getByRole("button", { name: /sign in/i });

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });
        fireEvent.click(submitBtn);

        expect(mockHandleLogin).toHaveBeenCalledWith({
            username: "John Doe",
            userEmail: "john@example.com"
        });

        expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
});