import { render, screen } from "@testing-library/react";
import { FriendCard } from "./FriendCard";

describe("FriendCard Component", () => {
    const mockFriend = {
        firstName: "Jane",
        lastName: "Doe",
        age: 28,
        gender: "Female",
        image: "https://example.com/jane.jpg"
    };

    test("renders friend information correctly via props", () => {
        render(<FriendCard {...mockFriend} />);

        const fullName = screen.getByText(/Jane Doe/i);
        expect(fullName).toBeInTheDocument();
        expect(fullName).toHaveClass("bold");

        expect(screen.getByText("Female")).toBeInTheDocument();
        expect(screen.getByText("28")).toBeInTheDocument();
    });

    test("renders the profile image with correct alt text", () => {
        render(<FriendCard {...mockFriend} />);

        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "https://example.com/jane.jpg");
        
        expect(img).toHaveAttribute("alt", "Jane's profile picture");
    });
});